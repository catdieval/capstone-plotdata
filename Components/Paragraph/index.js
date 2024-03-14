import styled from "styled-components";

const StyledP = styled.p`
  text-align: center;
  font-weight: 400;
  line-height: 1.2rem;
  font-size: 1.1rem;

  ${(props) =>
    props.$variant === "start" &&
    css`
      text-align: start;
      font-weight: 400;
      line-height: 1.2rem;
      font-size: 1.1rem;
      padding: 10px;
    `};
`;

export default function Paragraph({ children, $variant }) {
  return <StyledP $variant={$variant}>{children}</StyledP>;
}
