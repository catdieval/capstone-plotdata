import Heading from "../Heading";
import { Card } from "../Card/card.styled";
import Paragraph from "../Paragraph";
import Container from "../Container";
import FileUploader from "../FileUploader";
import InputTypeSubmit from "../InputTypeSubmit";

export default function UploadData({
  fileObj,
  onUploadFile,
  onConversion,
  hasClickedGetStarted,
}) {
  // Name of file
  const fileName = fileObj?.name;

  const handleSubmit = (event) => {
    event.preventDefault();
  };

  return (
    <>
      {hasClickedGetStarted && (
        <>
          <Heading>Step 1: Upload a CSV file</Heading>
          <Card>
            <Paragraph $variant="bold">Requirements:</Paragraph>
            <Paragraph $variant="start">
              <span> ✔ </span> The file should have a maximum size of 4GB.
            </Paragraph>
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
            <Container $centered="center" $margin>
              <FileUploader onUploadFile={onUploadFile} />
              {fileName ? (
                <p>Uploaded file: {fileName}</p>
              ) : (
                <p>No file chosen</p>
              )}
              <InputTypeSubmit
                $nomargin
                value="Next"
                onClick={onConversion}
                disabled={fileObj === null || fileObj === undefined}
              />
            </Container>
          </form>
        </>
      )}
    </>
  );
}
