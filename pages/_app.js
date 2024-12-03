import GlobalStyle from "../styles";
import { SWRConfig } from "swr";
import Layout from "../Components/Layout";
import { useState } from "react";
import CorrectArrays from "../Components/CorrectArrays";
import ConvertCSVToArray from "../Components/ConvertCSVToArray";

export default function App({ Component, pageProps }) {
  const fetcher = (url) => fetch(url).then((response) => response.json());

  // State to store the status about if the user has clicked on the "Get started" button
  const [hasClickedGetStarted, setHasClickedGetStarted] = useState(false);

  // Step 1: Upload CSV-file
  // State to store keys from the CSV file
  const [keynames, setKeynames] = useState([]);

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

  const [hasCompletedAllSteps, setHasCompletedAllSteps] = useState(false);

  const [currentStep, setCurrentStep] = useState(1);

  //State to store the clicked steps in an array when clicking on the next button
  const [clickedSteps, setClickedSteps] = useState([]);

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

      setKeynames(keys);
      setVals(correctValues);
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
    }
  }

  function handleSettingsChange(event) {
    setSettings({ ...settings, [event.target.name]: event.target.value });
  }

  function handleHasCompletedAllSteps() {
    setHasCompletedAllSteps(true);
  }

  function handleNext() {
    /* The condition for steps 1, 3 and 6 is needed to run the functions inside this condition, 
    which are needed to feed data to the app for the following steps.*/
    if (currentStep === 1) {
      handleConversion();
    } else if (currentStep === 3) {
      handleAssignVariables();
    } else if (currentStep === 6) {
      handleHasCompletedAllSteps();
    }
    trackSteps(currentStep);
    setCurrentStep(currentStep + 1);
  }

  function handleBack() {
    setCurrentStep(currentStep - 1);
  }

  function handleStepChange(step) {
    setCurrentStep(step);
  }

  function trackSteps(step) {
    setClickedSteps([...clickedSteps, step]);
  }
  return (
    <Layout>
      <GlobalStyle />
      <SWRConfig value={{ fetcher }}>
        <Component
          {...pageProps}
          keynames={keynames}
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
          hasCompletedAllSteps={hasCompletedAllSteps}
          onHasCompletedAllSteps={handleHasCompletedAllSteps}
          onNext={handleNext}
          onBack={handleBack}
          onStepChange={handleStepChange}
          currentStep={currentStep}
          clickedSteps={clickedSteps}
        />
      </SWRConfig>
    </Layout>
  );
}
