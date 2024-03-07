import Title from "../Title";
import Head from "next/head";
import styled from "styled-components";

const Main = styled.main`
  display: flex;
  margin: auto;
  margin-top: 140px;
  align-items: center;
  flex-direction: column;
  min-height: 100vh;
  max-width: 640px;
`;
export default function Layout({ children }) {
  return (
    <div>
      <Head>
        <title>PlotData</title>
      </Head>
      <Main>{children}</Main>
      <Title />
    </div>
  );
}
