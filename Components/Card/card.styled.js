import styled, { css } from "styled-components";

export const Card = styled.article`
  padding: 1rem 1rem;
  box-shadow: 0px 1px 5px -2px rgba(0, 0, 0, 0.15);
  background-color: white;
  margin: 30px;

  ${(props) =>
    props.$variant === "graph" &&
    css`
      padding: 1rem 1rem;
      box-shadow: 0px 1px 5px -2px rgba(0, 0, 0, 0.15);
      background-color: white;
      border-radius: 8px;
    `};
`;
