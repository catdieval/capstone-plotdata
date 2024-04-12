import Heading from "../Heading";
import Paragraph from "../Paragraph";
import Container from "../Container";
import InputTypeText from "../InputTypeText";
import InputTypeSubmit from "../InputTypeSubmit";

export default function GraphTitle({
  xLabel,
  yLabel,
  titleLabel,
  onTitleChange,
  hasCompletedStep4,
  onHasCompletedStep5,
}) {
  function handleSubmit(event) {
    event.preventDefault();
  }

  function notCompletedTitle() {
    return titleLabel.length === 0;
  }

  return (
    <>
      {hasCompletedStep4 === true && (
        <>
          <Heading> Step 5: Give a title to the graph </Heading>
          <Paragraph>Label for the x-axis: {xLabel}</Paragraph>
          <Paragraph>Label for the y-axis: {yLabel}</Paragraph>
          <form onSubmit={handleSubmit}>
            <Container $centered="center">
              <InputTypeText
                idString={"Title"}
                placeholderString={"Fill me with a title"}
                onChange={onTitleChange}
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
