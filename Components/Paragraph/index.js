import styled from "styled-components";

const StyledP = styled.p`
  text-align: center;
`;

export default function Paragraph({ children }) {
  return <StyledP>{children}</StyledP>;
}
