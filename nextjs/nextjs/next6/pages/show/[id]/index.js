import Layout from '../../../components/MyLayout';
import { useRouter } from 'next/router';

const Show = () => {
	const router = useRouter();
	return (
		<Layout>
			<h1>Show details - {router.query.id}</h1>
		</Layout>
	);
};

export default Show;
