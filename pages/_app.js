import GlobalStyle from "../styles";
import Layout from "../Components/Layout";

import useLocalStorageState from "use-local-storage-state";

export default function App({ Component, pageProps }) {
  const [clickedChartType, setClickedChartType] = useLocalStorageState(
    "clickedChartType",
    { defaultValue: "" }
  );

  function handleChartType(element) {
    setClickedChartType(element.target.innerText);
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
