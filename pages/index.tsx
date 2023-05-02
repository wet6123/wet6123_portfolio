import Head from "next/head";
import AboutMe from "../components/home/aboutMe";
import Banner from "../components/home/banner";
import Skills from "../components/home/skills";
import Layout from "./../components/layout";
import Career from "./../components/home/career";
import Archiving from "../components/home/archiving";
import Projects from "../components/home/projects";

export default function Home() {
  return (
    <Layout>
      <Head>
        <title>배준성 포트폴리오</title>
        <meta name="keyword" content="포트폴리오, 프론트엔드" />
        <meta name="description" content="배준성 포트폴리오" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Banner />
      <AboutMe />
      <Skills />
      <Archiving />
      <Projects />
      {/* <Career /> */}
    </Layout>
  );
}
