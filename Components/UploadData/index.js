import Heading from "../Heading";
import { Card } from "../Card/card.styled";
import Paragraph from "../Paragraph";
import { Container } from "../Container";
import CorrectArrays from "../CorrectArrays";
import FileUploader from "../FileUploader";
import { useState } from "react";
import useLocalStorageState from "use-local-storage-state";
const { convertCSVToArray } = require("convert-csv-to-array");
import { StyledInputTypeSubmit } from "../StyledInputTypeSubmit";

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

  return (
    <>
      <Heading>Step 1: Upload a CSV file.</Heading>
      <Card>
        <Paragraph $variant="bold">Requirements:</Paragraph>
        <Paragraph $variant="start">
          <span> ✔ </span> The file should have a header.
        </Paragraph>
        <Paragraph $variant="start">
          <span> ✔ </span>The file should be comma-delimited and the decimal
          separator for numbers should be a period (.).
        </Paragraph>
        <Paragraph $variant="start">
          <span> ✔ </span> If the file contains missing values, then replace
          these values in the file by null.
        </Paragraph>
      </Card>

      <form onSubmit={handleSubmit}>
        <Container $centered="center">
          <FileUploader onFileUploaded={handleFile} />
          {fileName ? <p>Uploaded file: {fileName}</p> : <p>No file chosen</p>}
          <StyledInputTypeSubmit
            type="submit"
            value="Next"
            onClick={handleConversion}
            disabled={!isUploaded}
          />
        </Container>
      </form>
    </>
  );
}
