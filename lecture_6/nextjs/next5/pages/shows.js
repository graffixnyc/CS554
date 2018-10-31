import Layout from '../components/MyLayout.js'
import Link from 'next/link'
import axios from 'axios'

const Shows = (props) => (
  <Layout>
    <h1>TV Shows</h1>
    <ul>
      {props.shows.map(show => (
               <li key={show.id}>
               {/*<Link as={`/show/${show.id}`} href={`/show?id=${show.id}`}> */}
               <Link as={`/show/${show.id}`} href={`/show?id=${show.id}`}>
                 <a>{show.name}</a>
               </Link>
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