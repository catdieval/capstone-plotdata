import styled from "styled-components";

const StyledHeading = styled.h2`
  text-align: center;
`;

export default function Heading({ children }) {
  return (
    <>
      <StyledHeading>{children}</StyledHeading>
    </>
  );
}
