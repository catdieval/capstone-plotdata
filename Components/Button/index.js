import styled, { css } from "styled-components";

const StyledButton = styled.button`
  background-color: ${(props) =>
    props.$isActive ? "var(--secondary-color)" : "var(--primary-color)"};
  border-radius: 12px;
  border: none;
  padding: 10px 20px;
  cursor: pointer;
  font-size: 1rem;
  color: white;
  font-weight: 700;
`;

export default function Button({ children, onClick, $variant, isActive }) {
  return (
    <StyledButton $variant={$variant} $isActive={isActive} onClick={onClick}>
      {children}
    </StyledButton>
  );
}
