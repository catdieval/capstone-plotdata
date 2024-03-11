import GlobalStyle from "../styles";
import Layout from "../Components/Layout";
import { useState } from "react";

export default function App({ Component, pageProps }) {
  const [clickedChartType, setClickedChartType] = useState("");

  function handleChartType(element) {
    setClickedChartType(element.target.innerText);
    alert(`You chose ${element.target.innerText}`);
  }

  return (
    <>
      <Layout>
        <GlobalStyle />
        <Component
          {...pageProps}
          clickedChartType={clickedChartType}
          onSelectChartType={handleChartType}
        />
      </Layout>
    </>
  );
}
