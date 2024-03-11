import styled, { css } from "styled-components";

export const Container = styled.section`
  flex-direction: ${(props) =>
    props.$direction === "column" ? "column" : "row"};
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;

  ${(props) =>
    props.$grid === "grid" &&
    css`
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      gap: 3rem;
      margin: 0;
      padding: 0;
    `};
`;
