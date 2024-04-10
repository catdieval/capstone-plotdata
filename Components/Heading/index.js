import styled from "styled-components";

export const StyledH3 = styled.h3`
  text-align: center;
`;
const StyledHeading = styled.h2`
  text-align: center;
`;

export default function Heading({ children }) {
  return <StyledHeading>{children}</StyledHeading>;
}
