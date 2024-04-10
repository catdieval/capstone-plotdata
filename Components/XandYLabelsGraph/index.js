import Paragraph from "../Paragraph";
import InputTypeText from "../InputTypeText";
import Heading from "../Heading";
import { StyledInputTypeSubmit } from "../StyledInputTypeSubmit";
import { Container } from "../Container";

export default function XandYLabelsGraph({
  xKey,
  yKey,
  xVariable,
  yVariable,
  onXLabelChange,
  onYLabelChange,
  xLabel,
  yLabel,
  onHasCompletedStep4,
}) {
  function handleSubmit(event) {
    event.preventDefault();
  }

  function notCompletedXAndYLabels() {
    return xLabel.length === 0 || yLabel.length === 0;
  }

  return (
    <>
      {xVariable.length > 0 && yVariable.length > 0 && (
        <>
          <Heading>Step 4: Give labels to axes</Heading>
          <Paragraph>For the x variable you chose:</Paragraph>
          <Paragraph $variant="bold">{xKey}</Paragraph>
          <Paragraph>For the y variable you chose:</Paragraph>
          <Paragraph $variant="bold">{yKey}</Paragraph>
          <form onSubmit={handleSubmit}>
            <Container $centered="center">
              <InputTypeText
                idString={"Label for the x-axis"}
                placeholderString={
                  "Fill me with name and unit, e.g. Age (years)"
                }
                onChange={onXLabelChange}
              />
              <br></br>
              <InputTypeText
                idString={"Label for the y-axis"}
                placeholderString={
                  "Fill me with name and unit, e.g. Height (inches)"
                }
                onChange={onYLabelChange}
              />

              <StyledInputTypeSubmit
                value="Next"
                onClick={onHasCompletedStep4}
                disabled={notCompletedXAndYLabels()}
              />
            </Container>
          </form>
        </>
      )}
    </>
  );
}
