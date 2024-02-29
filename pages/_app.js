import GlobalStyle from "../styles";
import Layout from "@/Layout";

export default function App({ Component, pageProps }) {
  return (
    <>
      <Layout>
        <GlobalStyle />
        <Component {...pageProps} />
      </Layout>
    </>
  );
}
