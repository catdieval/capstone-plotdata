import GlobalStyle from "../styles";
import Layout from "../Components/Layout";
import { useState } from "react";

export default function App({ Component, pageProps }) {
  const [clickedChartType, setClickedChartType] = useState("");

  function handleChartType(element) {
    setClickedChartType(element.target.innerText);
    alert(`You chose ${element.target.innerText}`);
  }

  //Labels to the Axes:
  const [xLabel, setXLabel] = useState("");
  const [yLabel, setYLabel] = useState("");

  function handleXLabelChange(event) {
    setXLabel(event.target.value);
  }

  function handleYLabelChange(event) {
    setYLabel(event.target.value);
  }

  return (
    <>
      <Layout>
        <GlobalStyle />
        <Component
          {...pageProps}
          clickedChartType={clickedChartType}
          onSelectChartType={handleChartType}
          xLabel={xLabel}
          yLabel={yLabel}
          onXLabelChange={handleXLabelChange}
          onYLabelChange={handleYLabelChange}
        />
      </Layout>
    </>
  );
}
