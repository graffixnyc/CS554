import Layout from '../components/MyLayout.js'
import Link from 'next/link'
import axios from 'axios';

class Shows extends React.Component {
   constructor(props) {
      super(props);
      this.state = {
         data: undefined,
         loading: false,
         searchTerm: undefined,
         searchData: undefined
      };
   }
      async getShows() {
            try {
                  const response = await axios.get('http://api.tvmaze.com/shows');
                  this.setState({ data: response.data});
            } catch (e) {
                  console.log(e);
            }
      }
      componentDidMount() {
            this.getShows();
      }

      handleChange = (e) => {
            let value = e.target.value;
            this.setState({ searchTerm: value }, () => {
            this.searchShows();
            });
      }
      
      onSubmit(e) {
            e.preventDefault();
      }
   async searchShows(){
      if (this.state.searchTerm) {
            try {
               const response = await axios.get('http://api.tvmaze.com/search/shows?q=' + this.state.searchTerm);
               this.setState({searchData: response.data});
            } catch (e) {
               console.log(e);
            }
      }
   }
   render() {
      let body = null;
      let li = null;
      const style = <style jsx='true'>{`
      li {
        list-style: none;
        margin: 5px 0;
      }

      a {
        text-decoration: none;
        color: blue;
        font-family: "Arial";
      }

      a:hover {
        opacity: 0.7;
        color: red;
      }
    `}</style>
      if (this.state.searchTerm) {
         li =
            this.state.searchData &&
            this.state.searchData.map(shows => {
               let show = shows.show;

               return (
                  <li key={show.id}>
                     <Link as={`/show/${show.id}`} href={`/show?id=${show.id}`}>
                 <a>{show.name}</a>
               </Link>
                {style}
                  </li>
               );
            });
      } else {
         li =
            this.state.data &&
            this.state.data.map(show => (
               <li key={show.id}>
                  <Link as={`/show/${show.id}`} href={`/show?id=${show.id}`}>
                 <a>{show.name}</a>
               </Link>
               {style}
               </li>
            ));
      }
      body = (
         <Layout>
            <form method="POST " name="formName" onSubmit={this.onSubmit}>
               <br/>
               <label>
                  {' '}
                  Search Term:
                  <input
                     type="text"
                     name="searchTerm"
                     onChange={this.handleChange}
                  />
               </label>
            </form>
            <ul className="list-unstyled">{li}</ul>
         </Layout>
      );

      return body;
   }
}

export default Shows;