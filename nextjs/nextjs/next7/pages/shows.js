import Layout from '../components/MyLayout.js'
import Link from 'next/link'
import axios from 'axios'

const Shows = (props) => (
  <Layout>
    <h1>TV Shows</h1>
    <ul>
      {props.shows.map(show => (
               <li key={show.id}>
               <Link as={`/show/${show.id}`} href={`/show?id=${show.id}`}>
                 <a>{show.name}</a>
               </Link>
               <style jsx>{`
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
        opacity: 0.6;
      }
    `}</style>

             </li>
            ))}
    </ul>
  </Layout>
)

Shows.getInitialProps = async function() {
  const res = await axios.get('https://api.tvmaze.com/shows')
  const data = await res.data

  console.log(`Show data fetched. Count: ${data.length}`)
console.log (data)
  return {
    shows: data
  }
}

export default Shows