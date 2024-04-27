import Button from "../Button";
import styled from "styled-components";
import Paragraph from "../Paragraph";

const ItemContainer = styled.section`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 0.8rem;
`;
export default function StepItem({
  name,
  label,
  onStepChange,
  currentStep,
  id,
}) {
  return (
    <ItemContainer>
      <Button
        $variant="circle"
        onClick={onStepChange}
        isDisabled={currentStep !== id && currentStep < id + 1}
      >
        {currentStep < id + 1 ? name : <span>✓</span>}
      </Button>
      <Paragraph
        $variant="bold"
        isDisabled={currentStep !== id && currentStep < id}
      >
        {label}
      </Paragraph>
    </ItemContainer>
  );
}
