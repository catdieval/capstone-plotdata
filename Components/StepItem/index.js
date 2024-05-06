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
  //In this function I have used an early return for the condition currentStep === id because the active step should be not disabled.
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
