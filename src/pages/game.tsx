import type { NextPage } from 'next';
import dynamic from 'next/dynamic';
import Head from 'next/head';

const DynamicHeader = dynamic(() => import('../canvas'), {
  ssr: false,
  loading: () => <header />,
});

const Main: NextPage = () => {
  return (
    <>
      <Head>
        <title>Code Game</title>
      </Head>
      <DynamicHeader />
    </>
  );
};

export default Main;
