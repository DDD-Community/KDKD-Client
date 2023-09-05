import Layout from '@/Layout';
import SearchResult from '@/components/Home/SearchResult';
import useAuth from '@/hooks/useAuth';
import { useEffect } from 'react';

function Home() {
  const { login } = useAuth();

  useEffect(() => {
    login('temp');
  }, []);

  return (
    <Layout>
      <SearchResult />
    </Layout>
  );
}

export default Home;
