import Button from "../Button";
import styled from "styled-components";
import Paragraph from "../Paragraph";

const ItemContainer = styled.section`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 0.8rem;
`;
export default function StepItem({ name, label, onStepChange }) {
  return (
    <ItemContainer>
      <Button $variant="circle" onClick={onStepChange}>
        {name}
      </Button>
      <Paragraph $variant="bold">{label}</Paragraph>
    </ItemContainer>
  );
}
