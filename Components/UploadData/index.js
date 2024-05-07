import Heading from "../Heading";
import { Card } from "../Card/card.styled";
import Paragraph from "../Paragraph";
import Container from "../Container";
import FileUploader from "../FileUploader";
import InputTypeSubmit from "../InputTypeSubmit";

export default function UploadData({
  fileObject,
  onUploadFile,
  onConversion,
  hasClickedGetStarted,
}) {
  // Name of file
  const fileName = fileObject?.name;

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
                <Paragraph $variant="fileName">
                  Uploaded file: {fileName}
                </Paragraph>
              ) : (
                <Paragraph $variant="fileName">No file chosen</Paragraph>
              )}
              {fileObject != null && (
                <>
                  <Paragraph $variant="red-step1">
                    Attention! if you upload another file, then you must click
                    on the button below to update the chart!
                  </Paragraph>
                  <Paragraph $variant="red-step1">
                    In this case you must also change the variables in Step 3 to
                    update the chart!
                  </Paragraph>
                </>
              )}
              <InputTypeSubmit
                $nomargin
                value="Next"
                onClick={onConversion}
                disabled={fileObject === null || fileObject === undefined}
              />
            </Container>
          </form>
        </>
      )}
    </>
  );
}
