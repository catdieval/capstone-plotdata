import Heading from "../../Layout/Heading";
import Paragraph from "../../Layout/Paragraph";
import InputTypeSubmit from "../../Layout/InputTypeSubmit";
import CorrectArrays from "../CorrectArrays";
import FileUploader from "../FileUploader";
import { useState } from "react";
import useLocalStorageState from "use-local-storage-state";
const { convertCSVToArray } = require("convert-csv-to-array");

export default function UploadData() {
  //State to store keys from the CSV file
  const [keynames, setKeyNames] = useLocalStorageState("keynames", {
    defaultValue: [],
  });

  //State to store the values
  const [vals, setVals] = useLocalStorageState("vals", {
    defaultValue: [],
  });

  //State to store the file object
  const [fileObj, setFileObj] = useState({});

  // State to store the isUploaded status
  const [isUploaded, setIsUploaded] = useState(false);

  const handleFile = (file) => {
    setFileObj(file);
    setIsUploaded(true);
  };

  // Name of file
  const fileName = fileObj.name;

  const handleSubmit = (event) => {
    event.preventDefault();
  };

  // Reading the file and converting the result to an array of objects
  const handleConversion = () => {
    const reader = new FileReader();

    reader.onload = function (e) {
      const arrayOfObjects = convertCSVToArray(e.target.result, {
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

  return <></>;
}
