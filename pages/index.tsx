import Head from "next/head";
import Layout from "./../components/layout";

export default function Home() {
  return (
    <Layout>
      <Head>
        <title>배준성 포트폴리오</title>
        <meta name="keyword" content="포트폴리오, 프론트엔드" />
        <meta name="description" content="배준성 포트폴리오" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <h1>home page</h1>
    </Layout>
  );
}
