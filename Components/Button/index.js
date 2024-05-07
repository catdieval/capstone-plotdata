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

  ${(props) =>
    props.$variant === "info" &&
    css`
      background-color: var(--info-color);
      opacity: 0.8;
      border-radius: 50%;
      border: none;
      padding: 4px;
      cursor: pointer;

      &:hover {
        opacity: 1;
      }
    `};

  ${(props) =>
    props.$variant === "login" &&
    css`
      font-size: 1rem;
      background-color: inherit;
      border: solid 2px var(--primary-color);
      color: var(--primary-color);
      padding: 6px 14px;
    `};
`;

export default function Button({ children, onClick, $variant, isActive }) {
  return (
    <StyledButton $variant={$variant} $isActive={isActive} onClick={onClick}>
      {children}
    </StyledButton>
  );
}
