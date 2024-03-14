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
  const [hasEnteredYLabel, sethasEnteredYLabel] = useState(false);
  function handleXLabelChange(event) {
    setXLabel(event.target.value);
  }
  function handleYLabelChange(event) {
    setYLabel(event.target.value);
    sethasEnteredYLabel(true);
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
          handleXLabelChange={handleXLabelChange}
          handleYLabelChange={handleYLabelChange}
          hasEnteredYLabel={hasEnteredYLabel}
          sethasEnteredYLabel={sethasEnteredYLabel}
        />
      </Layout>
    </>
  );
}
