import Layout from '@/Layout';
import { fetcher, sendRequest } from '@/api';
import useSWR from 'swr';
import useSWRMutation from 'swr/mutation';

interface Login {
  loginId: string;
  password: string;
}

function Home() {
  const { data } = useSWR('/members/me', fetcher);
  const { trigger, isMutating } = useSWRMutation(
    '/auth/login',
    sendRequest<Login>,
  );

  return (
    <Layout>
      <div style={{ height: '1000px' }}>hi {data?.id}</div>
      <button
        disabled={isMutating}
        onClick={async () => {
          try {
            const result = await trigger({
              loginId: 'choo000407',
              password: '1234',
            });
            console.log('result', result);
          } catch (e) {
            // 에러 핸들링
          }
        }}
      >
        Create User
      </button>
    </Layout>
  );
}

export default Home;
