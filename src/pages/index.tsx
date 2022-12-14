import type { NextPage } from 'next';
import Head from 'next/head';
import Login from '../elements/login';

const Main: NextPage = () => {
  return (
    <>
      <Head>
        <title>Code Game</title>
      </Head>
      <main>
        <Login />
      </main>
    </>
  );
};

export async function getStaticProps({ locale }: { locale: string }) {
  const text = await import(`../i18n/login/${locale}.json`);
  return {
    props: {
      messages: JSON.parse(JSON.stringify(text)),
    },
  };
}



export default Main;
