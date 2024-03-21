import Heading from "../Heading";
import { Card } from "../Card/card.styled";
import Paragraph from "../Paragraph";
import CenteredDiv from "../CenteredDiv";
import CorrectArrays from "../CorrectArrays";
import FileUploader from "../FileUploader";
import { StyledInputTypeSubmit } from "../StyledInputTypeSubmit";

export default function UploadData({
  fileObj,
  isUploaded,
  onUploadFile,
  onConversion,
}) {
  // Name of file
  const fileName = fileObj.name;

  const handleSubmit = (event) => {
    event.preventDefault();
  };

  return (
    <>
      <Heading>Step 1: Upload a CSV file to get the data.</Heading>
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
        <CenteredDiv>
          <FileUploader onFileUploaded={handleFile} />
          {fileName ? <p>Uploaded file: {fileName}</p> : <p>No file chosen</p>}
          <StyledInputTypeSubmit
            type="submit"
            value="Submit"
            onClick={handleConversion}
            disabled={!isUploaded}
          />
        </Container>
      </form>
    </>
  );
}
