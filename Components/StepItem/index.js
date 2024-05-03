import Button from "../Button";
import styled from "styled-components";
import Paragraph from "../Paragraph";
import { useState } from "react";

const ItemContainer = styled.section`
  display: flex;
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
  const [clicked, setClicked] = useState(false);

  function handleClick() {
    setClicked(true);
    onStepChange(id);
  }
  return (
    <ItemContainer>
      <Button
        $variant="circle"
        onClick={handleClick}
        isDisabled={!clicked && currentStep !== id && currentStep < id}
        disabled={!clicked && currentStep !== id && currentStep < id}
      >
        {currentStep < id + 1 ? name : <span>✓</span>}
      </Button>
      <Paragraph
        $variant="step-label"
        isDisabled={!clicked && currentStep !== id && currentStep < id}
      >
        {label}
      </Paragraph>
    </ItemContainer>
  );
}
