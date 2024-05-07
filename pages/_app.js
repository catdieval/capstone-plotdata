import GlobalStyle from "../styles";
import Layout from "../Components/Layout";
import { useState } from "react";
import CorrectArrays from "../Components/CorrectArrays";
import ConvertCSVToArray from "../Components/ConvertCSVToArray";

export default function App({ Component, pageProps }) {
  // State to store the status about if the user has clicked on the "Get started" button
  const [hasClickedGetStarted, setHasClickedGetStarted] = useState(false);

  // Step 1: Upload CSV-file
  // State to store keys from the CSV file
  const [keyNames, setKeyNames] = useState([]);

  // State to store the values
  const [vals, setVals] = useState([]);

  // State to store the file object
  const [fileObject, setFileObject] = useState(null);

  // Step 2: Choose chart type
  // State to store the selected chart type
  const [clickedChartType, setClickedChartType] = useState("");

  // Step 3: Choose variables
  // States to store the values of the x and y variables
  const [xVariable, setXVariable] = useState([]);
  const [yVariable, setYVariable] = useState([]);

  // States to store the values selected by the user in the dropdown menus for the x and y variables
  const [xKey, setXKey] = useState("");
  const [yKey, setYKey] = useState("");

  // Step 4 (Axes labels), 5 (Title) and 6 (Properties):
  const initialSettings = {
    xLabel: "",
    yLabel: "",
    titleLabel: "",
    barColor: "",
    lineColor: "",
    lineStyle: "",
    lineWidth: 1,
    markerColor: "",
    markerSymbol: "",
    markerSize: 0,
    gridXAxis: "false",
    gridYAxis: "false",
    gridLineStyleXAxis: "",
    gridLineStyleYAxis: "",
    rangeXAxis: "",
    rangeYAxis: "",
    minXAxis: null,
    maxXAxis: null,
    minYAxis: null,
    maxYAxis: null,
    logXAxis: "",
    logYAxis: "",
  };

  const [settings, setSettings] = useState(initialSettings);

  const [hasCompletedStep4, setHasCompletedStep4] = useState(false);

  const [hasCompletedStep5, setHasCompletedStep5] = useState(false);

  // State to check the status if the user has selected values for all properties for a given distribution
  // (e.g. bar plot)
  const [
    hasCompletedDistributionProperties,
    setHasCompletedDistributionProperties,
  ] = useState(false);

  const [hasCompletedStep6, setHasCompletedStep6] = useState(false);

  function handleGetStarted() {
    setHasClickedGetStarted(true);
  }

  function handleUploadFile(file) {
    setFileObject(file);
  }

  function handleConversion() {
    const reader = new FileReader();

    reader.onload = function (event) {
      const arrayOfObjects = ConvertCSVToArray(event.target.result, {
        separator: ",",
      });

      // The output of the convertCSVToArray function needs further processing
      const [keys, ...correctValues] = CorrectArrays(arrayOfObjects);

      setKeyNames(keys);
      setVals(correctValues);
      alert("File processed successfully.");
    };

    reader.readAsText(fileObject);
  }

  function handleSelectChartType(name) {
    setClickedChartType(name);
  }

  function handleXChange(event) {
    setXKey(event.target.value);
  }

  function handleYChange(event) {
    setYKey(event.target.value);
  }

  function handleAssignVariables() {
    if (vals.length > 0 && xKey !== "" && yKey !== "") {
      let tempXArray = new Array(vals.length);
      let tempYArray = new Array(vals.length);

      // In tempXArray fill in with the values associated to the key in vals
      // corresponding to the xKey value.
      // In tempYArray fill in with the values associated to the key in vals
      // corresponding to the yKey value.

      for (let i = 0; i < vals.length; i++) {
        for (let key in vals[i]) {
          if (key === xKey) {
            tempXArray[i] = vals[i][key];
          }
          if (key === yKey) {
            tempYArray[i] = vals[i][key];
          }
        }
      }

      setXVariable(tempXArray);
      setYVariable(tempYArray);
      alert("Data for the x and y variables are assigned.");
    }
  }

  function handleSettingsChange(event) {
    setSettings({ ...settings, [event.target.name]: event.target.value });
  }

  function handleHasCompletedStep4() {
    alert("Labels for the x-axis and the y-axis of the chart are assigned.");
    setHasCompletedStep4(true);
  }

  function handleHasCompletedStep5() {
    alert("Title of the chart is assigned.");
    setHasCompletedStep5(true);
  }

  function handleHasCompletedDistributionProperties() {
    alert("Distribution properties are assigned.");
    setHasCompletedDistributionProperties(true);
  }

  function handleHasCompletedStep6() {
    alert("Plotting properties are assigned.");
    setHasCompletedStep6(true);
  }

  return (
    <Layout>
      <GlobalStyle />
      <Component
        {...pageProps}
        hasClickedGetStarted={hasClickedGetStarted}
        onGetStarted={handleGetStarted}
        keyNames={keyNames}
        fileObject={fileObject}
        onUploadFile={handleUploadFile}
        onConversion={handleConversion}
        clickedChartType={clickedChartType}
        onSelectChartType={handleSelectChartType}
        xKey={xKey}
        yKey={yKey}
        xVariable={xVariable}
        yVariable={yVariable}
        onXChange={handleXChange}
        onYChange={handleYChange}
        onAssignVariables={handleAssignVariables}
        settings={settings}
        onSettingsChange={handleSettingsChange}
        hasCompletedStep4={hasCompletedStep4}
        onHasCompletedStep4={handleHasCompletedStep4}
        hasCompletedStep5={hasCompletedStep5}
        onHasCompletedStep5={handleHasCompletedStep5}
        hasCompletedDistributionProperties={hasCompletedDistributionProperties}
        onHasCompletedDistributionProperties={
          handleHasCompletedDistributionProperties
        }
        hasCompletedStep6={hasCompletedStep6}
        onHasCompletedStep6={handleHasCompletedStep6}
      />
    </Layout>
  );
}
