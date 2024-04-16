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
      {hasCompletedStep4 === true && (
        <>
          <Heading> Step 5: Give a title to the graph </Heading>
          <Paragraph>Label for the x-axis: {settings.xLabel}</Paragraph>
          <Paragraph>Label for the y-axis: {settings.yLabel}</Paragraph>
          <form onSubmit={handleSubmit}>
            <Container $centered="center">
              <InputTypeText
                idString={"Title"}
                placeholderString={"Fill me with a title"}
                onChange={onSettingsChange}
              />

              <InputTypeSubmit
                value="Next"
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
