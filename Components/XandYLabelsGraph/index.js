import Paragraph from "../Paragraph";
import InputTypeText from "../InputTypeText";
import Container from "../Container";
import InputTypeSubmit from "../InputTypeSubmit";
import {ButtonContainer} from "../Navigation/styledNavigation";
import Button from "../Button";

export default function XandYLabelsGraph({ 
  onDisableNextButton, 
  onNext, 
  onBack, 
  xKey, 
  yKey, 
  onSettingsChange, 
}) {
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
        <ButtonContainer>
          <Button $variant="back" onClick={onBack}>
            Back
          </Button>
          <InputTypeSubmit
            valueString="Next"
            onClick={onNext}
            disabled={onDisableNextButton}
          />  
          </ButtonContainer>
      </form>
    </>
  );
}
