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
    props.$variant === "circle" &&
    css`
      background-color: ${(props) =>
        props.$isDisabled ? "var(--disabled-color)" : "var(--secondary-color)"};
      opacity: 0.8;
      border-radius: 50%;
      border: none;
      padding: 0.4rem 0.7rem;
      cursor: pointer;
      &:hover {
        opacity: 1;
      }
    `};
  ${(props) =>
    props.$variant === "back" &&
    css`
      background-color: inherit;
      border: solid 2px var(--primary-color);
      color: var(--primary-color);
      padding: 8px 18px;
    `};

  ${(props) =>
    props.$variant === "next" &&
    css`
      background-color: var(--secondary-color);
      padding: 10px 20px;
      color: white;
      border-radius: 12px;
      border: none;
      cursor: pointer;
      font-size: 1rem;
      font-weight: 700;
      &:hover {
        &:not([disabled]) {
          background-color: #00ace6;
        }
      }
      &:disabled {
        opacity: 0.5;
      }
    `};

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
`;

export default function Button({
  children,
  onClick,
  $variant,
  isActive,
  isDisabled,
}) {
  return (
    <StyledButton
      $variant={$variant}
      $isActive={isActive}
      $isDisabled={isDisabled}
      onClick={onClick}
    >
      {children}
    </StyledButton>
  );
}
