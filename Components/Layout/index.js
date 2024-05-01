import Title from "../Title";
import Head from "next/head";
import styled from "styled-components";

const Main = styled.main`
  display: flex;
  margin: auto;
  margin-top: 140px;
  flex-direction: column;
  flex-wrap: wrap;
  justify-content: center;
  min-height: 100vh;
  max-width: 640px;
`;
export default function Layout({ children }) {
  return (
    <div>
      <Head>
        <title>PlotData</title>
        <link rel="icon" href="/PlotData.ico" />
      </Head>
      <Main>{children}</Main>
      <Title />
    </div>
  );
}
