import "../styles/globals.css";
import type { AppProps } from "next/app";
import Header from "../src/component/header";
import Footer from "../src/component/Footer";

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <div>
      <Header />
      <Component {...pageProps} />
      <Footer />
    </div>
  )

};

export default App;
