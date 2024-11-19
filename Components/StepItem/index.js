import Button from "../Button";
import styled from "styled-components";
import Paragraph from "../Paragraph";

const ItemContainer = styled.section`
  display: flex;
  align-items: center;
  gap: 0.8rem;
`;

export default function StepItem({
  buttonNumber,
  label,
  onClickStepper,
  id,
  clickedSteps,
  currentStep,
}) {

  /* This function has an early return for when currentStep === id is true (current step), such
  the stepper button has the default value of disabled attribute (=false).
  When currentStep === id is false (other steps than current step), the stepper button has disabled 
  attribute being false / true if the user has / has not clicked the "Next" button for these steps */
  function disableStepperButton() {
    if (currentStep === id) {
      return;
    } else return !clickedSteps.includes(id);
  }

  return (
    <ItemContainer>
      <Button
        $variant="circle"
        onClick={onClickStepper}
        disabled={disableStepperButton()}
      >
        {!clickedSteps.includes(id) ? buttonNumber : <span>✓</span>}
      </Button>
      <Paragraph $variant="step-label" $isDisabled={disableStepperButton()}>
        {label}
      </Paragraph>
    </ItemContainer>
  );
}
