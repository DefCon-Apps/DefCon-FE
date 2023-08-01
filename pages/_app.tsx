import type { AppProps } from "next/app";
import "../styles/globals.css";
import Header from "../src/Common/Header";
import Footer from "../src/Common/Footer";
import Head from "next/head";

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <div>
      <Head>
        <title>Def:Con - 대학생 프로그래밍 팀</title>
      </Head>
      <Header />
      <Component {...pageProps} />
      <Footer />
    </div>
  );
};

export default App;
