import Title from "../Title";
import Head from "next/head";

export default function Layout({ children }) {
  return (
    <div>
      <Head>
        <title>PlotData</title>
      </Head>
      <main>{children}</main>
      <Title />
    </div>
  );
}
