import styled from "styled-components";

export default function CenteredDiv({ children }) {
  const StyledDiv = styled.div`
    text-align: center;
  `;

  return <StyledDiv>{children}</StyledDiv>;
}
