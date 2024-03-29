import styled, { css } from "styled-components";

const StyledP = styled.p`
  text-align: center;
  font-weight: 400;
  line-height: 1.2rem;
  font-size: 1.1rem;

  ${(props) =>
    props.$variant === "start" &&
    css`
      text-align: start;
      padding: 10px;
    `};

  ${(props) =>
    props.$variant === "bold" &&
    css`
      font-weight: 600;
    `};
`;

export default function Paragraph({ children, $variant }) {
  return <StyledP $variant={$variant}>{children}</StyledP>;
}
