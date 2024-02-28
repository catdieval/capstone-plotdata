import styled from "styled-components";

const StyledInputTypeSubmit = styled.input.attrs({ type: "submit" })`
  background-color: #1f77b4;
  padding: 10px;
  cursor: pointer;
  font-size: 16px;
  color: white;
  font-weight: bold;
`;

export default function InputTypeSubmit() {
  return <StyledInputTypeSubmit />;
}
