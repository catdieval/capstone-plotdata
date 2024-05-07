import Heading from "../Heading";
import Paragraph from "../Paragraph";
import Container from "../Container";
import InputTypeText from "../InputTypeText";
import InputTypeSubmit from "../InputTypeSubmit";

export default function GraphTitle({
  settings,
  onSettingsChange,
  hasCompletedStep4,
  onHasCompletedStep5,
}) {
  function handleSubmit(event) {
    event.preventDefault();
  }

  function notCompletedTitle() {
    return settings.titleLabel.length === 0;
  }

  return (
    <>
      {hasCompletedStep4 && (
        <>
          <Heading>Step 5: Give a title to the chart</Heading>
          <Paragraph>Label for the x-axis:</Paragraph>
          <Paragraph $variant="bold">{settings.xLabel}</Paragraph>
          <Paragraph>Label for the y-axis:</Paragraph>
          <Paragraph $variant="bold">{settings.yLabel}</Paragraph>
          <form onSubmit={handleSubmit}>
            <Container $centered="center">
              <InputTypeText
                idString={"Title"}
                nameString="titleLabel"
                placeholderString={"Fill me with a title"}
                onChange={onSettingsChange}
              />
              <InputTypeSubmit
                value="Assign title"
                onClick={onHasCompletedStep5}
                disabled={notCompletedTitle()}
              />
            </Container>
          </form>
        </>
      )}
    </>
  );
}
