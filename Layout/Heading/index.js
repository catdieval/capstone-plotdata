import styled from "styled-components";

const StyledHeading = styled.h2``;

export default function Heading({ children }) {
  return (
    <>
      <StyledHeading>{children}</StyledHeading>
    </>
  );
}
