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
}) {
  function handleSubmit(event) {
    event.preventDefault();
  }

  function handleAxesLabels() {
    if (xLabel.length > 0 && yLabel.length > 0) {
      alert("Labels for the x-axis and the y-axis of the graph are assigned");
    }
  }

  function completedXAndYLabels() {
    return xLabel.length === 0 || yLabel.length === 0;
  }

  return (
    <>
      {xVariable.length > 0 && yVariable.length > 0 && (
        <>
          <Heading>Step 4: Give labels to axes</Heading>
          <Paragraph>
            For the x variable you chose:
            <Paragraph $variant="bold">{xKey}</Paragraph>
          </Paragraph>
          <Paragraph>
            For the y variable you chose:
            <Paragraph $variant="bold">{yKey}</Paragraph>
          </Paragraph>
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
                onClick={handleAxesLabels}
                disabled={completedXAndYLabels()}
              />
            </Container>
          </form>
        </>
      )}
    </>
  );
}
