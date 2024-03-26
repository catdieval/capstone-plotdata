import Heading from "../Heading";
import { Card } from "../Card/card.styled";
import Paragraph from "../Paragraph";
import { Container } from "../Container";
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
      <Heading>Step 1: Upload a CSV file</Heading>
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
          <FileUploader onUploadFile={onUploadFile} />
          {fileName ? <p>Uploaded file: {fileName}</p> : <p>No file chosen</p>}
          <StyledInputTypeSubmit
            value="Next"
            onClick={onConversion}
            disabled={!isUploaded}
          />
        </Container>
      </form>
    </>
  );
}
