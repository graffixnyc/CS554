import Layout from '../components/MyLayout';
import { useRouter } from 'next/router';
const Show = () => {
  const router = useRouter();
  return (
    <Layout>
      <div>
        <h1>Show Details - {router.query.id} </h1>
      </div>
    </Layout>
  );
};

export default Show;
