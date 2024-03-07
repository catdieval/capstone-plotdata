import styled from "styled-components";

const StyledDiv = styled.div`
  text-align: center;
`;

export default function CenteredDiv({ children }) {
  return <StyledDiv>{children}</StyledDiv>;
}
