import Heading from "../Heading";
import Paragraph from "../Paragraph";
import CenteredDiv from "../CenteredDiv";
import CorrectArrays from "../CorrectArrays";
import FileUploader from "../FileUploader";
import { useState } from "react";
import useLocalStorageState from "use-local-storage-state";
const { convertCSVToArray } = require("convert-csv-to-array");
import { StyledInputTypeSubmit } from "@/Components/StyledInputTypeSubmit";

export default function UploadData() {
  //State to store keys from the CSV file
  const [keynames, setKeynames] = useLocalStorageState("keynames", {
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

  return (
    <>
      <Heading>Step 1: Upload a CSV file to get the data.</Heading>
      <Paragraph>
        <b>Notes:</b>
        <br></br>
        The file should have a header.<br></br>
        The file should be comma-delimited and the decimal separator for numbers
        should be a period (.).<br></br>
        If the file contains missing values, then replace these values in the
        file by null.
      </Paragraph>
      <form onSubmit={handleSubmit}>
        <CenteredDiv>
          <FileUploader handleFile={handleFile} />
          {fileName ? <p>Uploaded file: {fileName}</p> : <p>No file chosen</p>}
          <StyledInputTypeSubmit
            type="submit"
            value="Submit"
            onClick={handleConversion}
            disabled={!isUploaded}
          />
        </CenteredDiv>
      </form>
    </>
  );
}
