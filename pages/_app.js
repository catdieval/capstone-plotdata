import GlobalStyle from "../styles";
import Layout from "../Components/Layout";
import { useState } from "react";

export default function App({ Component, pageProps }) {
  const [clickedChartType, setClickedChartType] = useState("");

  function handleChartType(element) {
    setClickedChartType(element.target.innerText);
    alert(`You chose ${element.target.innerText}`);
  }
  //////////////////////////////////////////////////////////////////////////////////
  //Labels to the Axes:
  const [XLabel, setXLabel] = useState("");
  const [YLabel, setYLabel] = useState("");
  const [hasEnteredYLabel, setHasEnteredYLabel] = useState(false);

  function handleXLabelChange(event) {
    setXLabel(event.target.value);
  }

  function handleYLabelChange(event) {
    setYLabel(event.target.value);
    setHasEnteredYLabel(true);
  }
  /////////////////////////////////////////////////////////////////////////////////////

  return (
    <>
      <Layout>
        <GlobalStyle />
        <Component
          {...pageProps}
          clickedChartType={clickedChartType}
          onSelectChartType={handleChartType}
          XLabel={XLabel}
          YLabel={YLabel}
          onXLabelChange={handleXLabelChange}
          onYLabelChange={handleYLabelChange}
          hasEnteredYLabel={hasEnteredYLabel}
        />
      </Layout>
    </>
  );
}
