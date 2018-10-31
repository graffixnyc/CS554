import Layout from '../components/MyLayout.js'
import axios from 'axios'

const Show =  (props) => (
    <Layout>
       <h1>{props.show.name}</h1>
       <p>{props.show.summary.replace(/(<([^>]+)>)/gi, '')}</p>
       <img src={props.show.image.medium}/>
    </Layout>
)

Show.getInitialProps = async function (context) {
  const { id } = context.query
  console.log(`id: ${id}`)
  const res = await axios.get(`https://api.tvmaze.com/shows/${id}`)
  const show = await res.data

  console.log(`Fetched show: ${show.name}`)

  return { show }
}

export default Show