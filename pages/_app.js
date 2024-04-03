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
  const [fileObj, setFileObj] = useState({});

  // State to store the isUploaded status
  const [isUploaded, setIsUploaded] = useState(false);

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

  //Step 4: Labels to the axes:
  const [xLabel, setXLabel] = useState("");
  const [yLabel, setYLabel] = useState("");

  //Step 5: Add a title to the graph
  const [titleLabel, setTitleLabel] = useState("");

  //Step 6: Properties
  const [barColor, setBarColor] = useState("");

  //Line Properties
  const [lineColor, setLineColor] = useState("");
  const [lineStyle, setLineStyle] = useState("");
  const [lineWidth, setLineWidth] = useState(0);

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

  function handleSelectChartType(name) {
    setClickedChartType(name);
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

  function handleXLabelChange(event) {
    setXLabel(event.target.value);
  }

  function handleYLabelChange(event) {
    setYLabel(event.target.value);
  }

  function handleTitleChange(event) {
    setTitleLabel(event.target.value);
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
          titleLabel={titleLabel}
          onTitleChange={handleTitleChange}
        />
      </Layout>
    </>
  );
}
