import Paragraph from "../Paragraph";
import InputTypeText from "../InputTypeText";
import Container from "../Container";

export default function XandYLabelsGraph({ xKey, yKey, onSettingsChange }) {
  function handleSubmit(event) {
    event.preventDefault();
  }

  return (
    <>
      <Paragraph>For the x variable you chose:</Paragraph>
      <Paragraph $variant="bold">{xKey}</Paragraph>
      <Paragraph>For the y variable you chose:</Paragraph>
      <Paragraph $variant="bold">{yKey}</Paragraph>
      <form onSubmit={handleSubmit}>
        <Container $centered="center" $margin_bottom>
          <InputTypeText
            idString={"Label for the x-axis"}
            nameString="xLabel"
            placeholderString={"Fill me with name and unit, e.g. Age (years)"}
            onChange={onSettingsChange}
          />
          <br></br>
          <InputTypeText
            idString={"Label for the y-axis"}
            nameString="yLabel"
            placeholderString={
              "Fill me with name and unit, e.g. Height (inches)"
            }
            onChange={onSettingsChange}
          />
        </Container>
      </form>
    </>
  );
}
