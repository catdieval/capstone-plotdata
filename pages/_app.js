import GlobalStyle from "../styles";
import Layout from "../Components/Layout";
import { useState } from "react";
import CorrectArrays from "../Components/CorrectArrays";
import ConvertCSVToArray from "../Components/ConvertCSVToArray";

export default function App({ Component, pageProps }) {
  //Step 1: Upload CSV-file
  //State to store keys from the CSV file
  const [keynames, setKeynames] = useState([]);

  //State to store the values
  const [vals, setVals] = useState([]);

  // State to store the file object
  //const [fileObj, setFileObj] = useState({});
  const [fileObj, setFileObj] = useState(null);

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
    lineWidth: 0,
    markerColor: "",
    markerSymbol: "",
    markerSize: 0,
    gridXAxis: "false",
    gridYAxis: "false",
    gridLineStyleXAxis: "",
    gridLineStyleYAxis: "",
    rangeXAxis: "",
    rangeYAxis: "",
    minXAxis: "",
    maxXAxis: "",
    minYAxis: "",
    maxYAxis: "",
    logXAxis: "",
    logYAxis: "",
  };

  const [settings, setSettings] = useState(initialSettings);

  const [hasCompletedStep4, setHasCompletedStep4] = useState(false);

  const [hasCompletedStep5, setHasCompletedStep5] = useState(false);

  const [hasCompletedDistProp, setHasCompletedDistProp] = useState(false);

  const [hasCompletedStep6, setHasCompletedStep6] = useState(false);
  const [currentStep, setCurrentStep] = useState(1);

  function handleUploadFile(file) {
    setFileObj(file);
  }

  function handleConversion() {
    const reader = new FileReader();

    reader.onload = function (event) {
      const arrayOfObjects = ConvertCSVToArray(event.target.result, {
        separator: ",",
      });

      // The output of the convertCSVToArray function needs further processing
      const [keys, ...correctValues] = CorrectArrays(arrayOfObjects);

      setKeynames(keys);
      setVals(correctValues);
      alert("File processed successfully");
    };

    reader.readAsText(fileObj);
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
    alert("Labels for the x-axis and the y-axis of the graph are assigned");
    setHasCompletedStep4(true);
  }

  function handleHasCompletedStep5() {
    alert("Title of the graph is assigned");
    setHasCompletedStep5(true);
  }

  function handleHasCompletedDistProp() {
    alert("Distribution Properties are assigned");
    setHasCompletedDistProp(true);
  }

  function handleHasCompletedStep6() {
    alert("The Plotting Properties are assigned");
    setHasCompletedStep6(true);
  }

  function handleNext() {
    setCurrentStep((currentStep) => currentStep + 1);
  }
  function handleBack() {
    setCurrentStep((currentStep) => currentStep - 1);
  }

  return (
    <Layout>
      <GlobalStyle />
      <Component
        {...pageProps}
        keynames={keynames}
        fileObj={fileObj}
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
        hasCompletedDistProp={hasCompletedDistProp}
        onHasCompletedDistProp={handleHasCompletedDistProp}
        hasCompletedStep6={hasCompletedStep6}
        onHasCompletedStep6={handleHasCompletedStep6}
        onNextChange={handleNext}
        onBackChange={handleBack}
        currentStep={currentStep}
      />
    </Layout>
  );
}
