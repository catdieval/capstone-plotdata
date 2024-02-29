import styled from "styled-components";

const StyledP = styled.p``;

export default function Paragraph({ children }) {
  return <StyledP>{children}</StyledP>;
}
