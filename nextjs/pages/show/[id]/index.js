import Layout from '../../../components/MyLayout';
import axios from 'axios';
import Link from 'next/link';
const Show = (props) => {
	return (
		<Layout>
			<div>
				<h1>{props.show.name} </h1>
				<p>{props.show.summary ? props.show.summary.replace(/(<([^>]+)>)/gi, '') : 'No Summary'}</p>
				<img src={props.show.image ? props.show.image.medium : 'https://patrickhill.nyc/images/me.jpg'} />
			</div>

			<style jsx>{`
				p::first-letter {
					font-size: 200%;
				}
			`}</style>
		</Layout>
	);
};

Show.getInitialProps = async (context) => {
	console.log(context);
	const { id } = context.query;
	const { data } = await axios.get('http://api.tvmaze.com/shows/' + id);
	console.log(`Fetched a show: ${data.name}`);

	return { show: data };
};
export default Show;
