import styled, { css } from "styled-components";

const StyledP = styled.p`
  text-align: center;
  font-weight: 400;
  line-height: 1.2rem;
  font-size: 1.1rem;
  color: ${(props) => (props.$isDisabled ? "var(--disabled-color)" : "")};

  ${(props) =>
    props.$variant === "start" &&
    css`
      text-align: start;
      padding: 10px;
      text-align: justify;
    `};

  ${(props) =>
    props.$variant === "bold" &&
    css`
      font-weight: 600;
    `};
  ${(props) =>
    props.$variant === "step-label" &&
    css`
      font-weight: 600;
      font-size: 1.2rem;
    `};

  ${(props) =>
    props.$variant === "border" &&
    css`
      border: solid 2px var(--primary-color);
      border-radius: 8px;
      padding: 8px;
    `};
`;

export default function Paragraph({ children, $variant, $isDisabled }) {
  return (
    <StyledP $variant={$variant} $isDisabled={$isDisabled}>
      {children}
    </StyledP>
  );
}
