import Layout from '../components/MyLayout';
import axios from 'axios';
import Link from 'next/link';
const Shows = (props) => {
	return (
		<Layout>
			<h1>Shows</h1>
			<ul>
				{props.shows.map((show) => (
					<li key={show.id}>
						<Link href={`/show/${show.id}`}>
							<a>{show.name}</a>
						</Link>
					</li>
				))}
			</ul>
			<style jsx>{`
				ul {
					list-style-type: none;
				}
			`}</style>
		</Layout>
	);
};
Shows.getInitialProps = async () => {
	const { data } = await axios.get('http://api.tvmaze.com/shows');
	console.log(`Feteched Data:  Count: ${data.length}`);
	console.log(data);
	return {
		shows: data
	};
};

export default Shows;
