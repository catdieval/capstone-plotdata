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
      gap: 2rem;
      margin: 40px;
      padding: 0;
    `};

  ${(props) =>
    props.$wrap === "wrap" &&
    css`
      display: flex;
      flex-wrap: wrap;
      justify-content: center;
      gap: 3rem;
      margin: 40px;
      padding: 0;
    `};

  ${(props) =>
    props.$centered === "center" &&
    css`
      display: flex;
      flex-direction: column;
      align-items: center;
      padding: 0;
      margin-top: 60px;
      margin-bottom: 60px;
    `};
`;
