import styled, { css } from "styled-components";

const StyledButton = styled.button`
  background-color: var(--primary-color);
  border-radius: 12px;
  border: none;
  padding: 10px 20px;
  cursor: pointer;
  font-size: 1rem;
  color: white;
  font-weight: 700;

  &:hover {
    background-color: var(--primary-color-shade);
  }
`;

export default function Button({ children, onClick }) {
  return <StyledButton onClick={onClick}>{children}</StyledButton>;
}
