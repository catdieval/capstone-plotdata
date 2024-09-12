import styled from "styled-components";

export const StyledInputTypeSubmit = styled.input.attrs({
    type: "submit",
  })`
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
  `;