import type { AppProps } from "next/app";
import Header from "../src/Common/Header";
import Footer from "../src/Common/Footer";

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
