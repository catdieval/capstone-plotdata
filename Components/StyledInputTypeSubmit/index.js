import styled from "styled-components";

export const StyledInputTypeSubmit = styled.input.attrs({
  type: "submit",
})`
  background-color: var(--secondary-color);
  padding: 10px 20px;
  border-radius: 12px;
  border: none;
  cursor: pointer;
  font-size: 1rem;
  font-weight: 700;
  margin: ${(props) => (props.$nomargin ? "" : "40px")};

  &:hover {
    background-color: #00ace6;
  }
`;
