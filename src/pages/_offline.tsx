import type { NextPage } from 'next';

const Main: NextPage = () => {
  return (
    <>
      <main>
        <div>you are offline</div>
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
