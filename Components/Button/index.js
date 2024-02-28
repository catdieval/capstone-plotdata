import styled from "styled-components";

const StyledButton = styled.button`
  background-color: #1f77b4;
  padding: 10px;
  cursor: pointer;
  font-size: 16px;
  color: white;
  font-weight: bold;
`;

export default function Button() {
  return <StyledButton></StyledButton>;
}
