import styled, { css } from "styled-components";

export const Container = styled.section`
  ${(props) =>
    props.$direction === "column" &&
    css`
      display: flex;
      flex-direction: column;
      flex-wrap: wrap;
      justify-content: space-around;
    `};

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
