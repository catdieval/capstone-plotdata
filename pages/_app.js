import GlobalStyle from "../styles";
import Layout from "../Components/Layout";
import { useState } from "react";
import CorrectArrays from "../Components/CorrectArrays";
import ConvertCSVToArray from "../Components/ConvertCSVToArray";

export default function App({ Component, pageProps }) {
  //State to store keys from the CSV file

  const [keynames, setKeynames] = useState([]);

  //State to store the values
  const [vals, setVals] = useState([]);

  // State to store the file object
  const [fileObj, setFileObj] = useState({});

  // State to store the isUploaded status
  const [isUploaded, setIsUploaded] = useState(false);

  // State to store the selected chart type
  const [clickedChartType, setClickedChartType] = useState("");

  // State to store the values of the x variable
  const [xVariable, setXVariable] = useState([]);

  // State to store the values of the y variable
  const [yVariable, setYVariable] = useState([]);

  // State to store the value selected by the user in the dropdown menu for the x variable
  const [xKey, setXKey] = useState("");

  // State to store the value selected by the user in the dropdown menu for the y variable
  const [yKey, setYKey] = useState("");

  const handleUploadFile = (file) => {
    setFileObj(file);
    setIsUploaded(true);
  };

  const handleConversion = () => {
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
  };

  function handleSelectChartType(element) {
    setClickedChartType(element.target.innerText);
  }

  function handleXChange(event) {
    const choice = event.target.value;
    setXKey(choice);
  }

  function handleYChange(event) {
    const choice = event.target.value;
    setYKey(choice);
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
          keynames={keynames}
          fileObj={fileObj}
          isUploaded={isUploaded}
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
          xLabel={xLabel}
          yLabel={yLabel}
          onXLabelChange={handleXLabelChange}
          onYLabelChange={handleYLabelChange}
        />
      </Layout>
    </>
  );
}
