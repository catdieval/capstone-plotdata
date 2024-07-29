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
  onStepChange,
  id,
  clickedSteps,
  currentStep,
}) {
  //This function has an early return for when the condition currentStep === id is true because the stepper button for the current step should be not disabled.
  function disableStepperButton() {
    if (currentStep === id) {
      return;
    } else return !clickedSteps.includes(id);
  }

  return (
    <ItemContainer>
      <Button
        $variant="circle"
        onClick={onStepChange}
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
