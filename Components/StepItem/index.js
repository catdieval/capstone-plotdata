import Button from "../Button";
import styled from "styled-components";
import Paragraph from "../Paragraph";

const ItemContainer = styled.section`
  display: flex;
  align-items: center;
  gap: 0.8rem;
`;

export default function StepItem({
  name,
  label,
  onStepChange,
  id,
  clickedSteps,
  currentStep,
}) {
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
        isDisabled={disableStepperButton()}
        disabled={disableStepperButton()}
      >
        {!clickedSteps.includes(id) ? name : <span>✓</span>}
      </Button>
      <Paragraph $variant="step-label" $isDisabled={disableStepperButton()}>
        {label}
      </Paragraph>
    </ItemContainer>
  );
}
