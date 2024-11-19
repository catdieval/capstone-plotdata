import Container from "../Container";
import Paragraph from "../Paragraph";
import DropDownMenu from "../DropDownMenu";
import InputTypeSubmit from "../InputTypeSubmit";
import {ButtonContainer} from "../Navigation/styledNavigation";
import Button from "../Button";

export default function ChooseVariables({
  onDisableNextButton, 
  onNext, 
  onBack,
  keynames,
  onXChange,
  onYChange,
  xKey,
  yKey,
}) {
  function handleSubmit(event) {
    event.preventDefault();
  }

  if (xKey === yKey && xKey !== "") {
    alert(
      "Are you sure you want to use the same variable for x as for y? It would give a meaningless plot."
    );
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <Container $centered="center" $margin_bottom> 
          <Paragraph $variant="start">Variable for the x-axis:</Paragraph>
          <DropDownMenu
            idString="x:"
            onChange={onXChange}
            arrayOfOptions={keynames}
          />
          <Paragraph $variant="start">Variable for the y-axis:</Paragraph>
          <DropDownMenu
            idString="y:"
            onChange={onYChange}
            arrayOfOptions={keynames}
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
