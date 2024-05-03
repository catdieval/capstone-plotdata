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
}) {
  return (
    <ItemContainer>
      <Button
        $variant="circle"
        onClick={onStepChange}
        isDisabled={!clickedSteps.includes(id)}
        disabled={!clickedSteps.includes(id)}
      >
        {!clickedSteps.includes(id) ? name : <span>✓</span>}
      </Button>
      <Paragraph $variant="step-label" isDisabled={!clickedSteps.includes(id)}>
        {label}
      </Paragraph>
    </ItemContainer>
  );
}
