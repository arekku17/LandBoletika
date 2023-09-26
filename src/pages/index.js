import Head from "next/head";
import Header from "../components/Header";
import Main from "../components/Main";
import Footer from "../components/Footer";

function Home() {
  return (
    <div className="text-black">
      <Head>
        <title>Boletika</title>
        <link rel="icon" href="/images/boletika-logo.png" />
        <meta name="viewport" content="width=device-width, initial-scale=1"></meta>
      </Head>
      <Main />
    </div>
  );
}

export default Home;
