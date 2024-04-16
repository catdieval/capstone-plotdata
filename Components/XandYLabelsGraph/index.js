import Paragraph from "../Paragraph";
import InputTypeText from "../InputTypeText";
import Heading from "../Heading";
import InputTypeSubmit from "../InputTypeSubmit";
import Container from "../Container";

export default function XandYLabelsGraph({
  xVariable,
  yVariable,
  onHasCompletedStep4,
  settings,
  onSettingsChange,
}) {
  function handleSubmit(event) {
    event.preventDefault();
  }

  function notCompletedXAndYLabels() {
    return settings.xLabel.length === 0 || settings.yLabel.length === 0;
  }

  return (
    <>
      {xVariable.length > 0 && yVariable.length > 0 && (
        <>
          <Heading>Step 4: Give labels to axes</Heading>
          <Paragraph>For the x variable you chose:</Paragraph>
          <Paragraph $variant="bold">{settings.xKey}</Paragraph>
          <Paragraph>For the y variable you chose:</Paragraph>
          <Paragraph $variant="bold">{settings.yKey}</Paragraph>
          <form onSubmit={handleSubmit}>
            <Container $centered="center">
              <InputTypeText
                idString={"Label for the x-axis"}
                placeholderString={
                  "Fill me with name and unit, e.g. Age (years)"
                }
                onChange={onSettingsChange}
              />
              <br></br>
              <InputTypeText
                idString={"Label for the y-axis"}
                placeholderString={
                  "Fill me with name and unit, e.g. Height (inches)"
                }
                onChange={onSettingsChange}
              />

              <InputTypeSubmit
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
