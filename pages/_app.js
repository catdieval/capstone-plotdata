import GlobalStyle from "../styles";
import Layout from "../Components/Layout";
import { useState } from "react";
import useLocalStorageState from "use-local-storage-state";
import CorrectArrays from "../Components/CorrectArrays";
const { convertCSVToArray } = require("convert-csv-to-array");

export default function App({ Component, pageProps }) {
  //State to store keys from the CSV file
  const [keynames, setKeynames] = useLocalStorageState("keynames", {
    defaultValue: [],
  });

  //State to store the values
  const [vals, setVals] = useLocalStorageState("vals", {
    defaultValue: [],
  });

  // State to store the file object
  const [fileObj, setFileObj] = useState({});

  // State to store the isUploaded status
  const [isUploaded, setIsUploaded] = useState(false);

  // State to store the selected chart type
  const [clickedChartType, setClickedChartType] = useState("");

  const handleUploadFile = (file) => {
    setFileObj(file);
    setIsUploaded(true);
  };

  // Reading the file and converting the result to an array of objects
  const handleConversion = () => {
    const reader = new FileReader();

    reader.onload = function (loadEvent) {
      const arrayOfObjects = convertCSVToArray(loadEvent.target.result, {
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
          keynames={keynames}
          vals={vals}
          fileObj={fileObj}
          isUploaded={isUploaded}
          onUploadFile={handleUploadFile}
          onConversion={handleConversion}
          clickedChartType={clickedChartType}
          onSelectChartType={handleChartType}
        />
      </Layout>
    </>
  );
}
