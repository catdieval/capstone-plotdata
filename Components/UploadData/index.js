import Heading from "../Heading";
import { Card } from "../Card/card.styled";
import Paragraph from "../Paragraph";
import CenteredDiv from "../CenteredDiv";
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
        <Paragraph>
          <b>Notes:</b>
          <br></br>
          The file should have a header.<br></br>
          The file should be comma-delimited and the decimal separator for
          numbers should be a period (.).<br></br>
          If the file contains missing values, then replace these values in the
          file by null.
        </Paragraph>
      </Card>

      <form onSubmit={handleSubmit}>
        <CenteredDiv>
          <FileUploader onUploadFile={onUploadFile} />
          {fileName ? <p>Uploaded file: {fileName}</p> : <p>No file chosen</p>}
          <StyledInputTypeSubmit
            type="submit"
            value="Submit"
            onClick={onConversion}
            disabled={!isUploaded}
          />
        </CenteredDiv>
      </form>
    </>
  );
}
