import Heading from "../Heading";
import Paragraph from "../Paragraph";
import { Container } from "../Container";
import InputTypeText from "../InputTypeText";
import { StyledInputTypeSubmit } from "../StyledInputTypeSubmit";

export default function GraphTitle({
  xLabel,
  yLabel,
  titleLabel,
  onTitleChange,
}) {
  function handleSubmit(event) {
    event.preventDefault();
  }

  function handleTitle() {
    if (titleLabel.length > 0) {
      alert("Title of the graph is assigned");
    }
  }

  function completedTitle() {
    return titleLabel.length === 0;
  }

  return (
    <>
      {xLabel.length > 0 && yLabel.length > 0 && (
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
              <br></br>
              <br></br>
              <StyledInputTypeSubmit
                value="Next"
                onClick={handleTitle}
                disabled={completedTitle()}
              />
            </Container>
          </form>
        </>
      )}
    </>
  );
}
