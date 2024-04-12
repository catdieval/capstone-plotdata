import styled, { css } from "styled-components";

export const Container = styled.section`
  ${(props) =>
    props.$direction === "column" &&
    css`
      display: flex;
      flex-direction: column;
      flex-wrap: wrap;
      align-items: ${(props) => (props.$center ? "center" : "start")};
      justify-content: space-around;
    `};

  ${(props) =>
    props.$wrap === "wrap" &&
    css`
      display: flex;
      flex-wrap: wrap;
      justify-content: center;
      gap: 3rem;
      margin: 30px;
      padding: 0;
    `};

  ${(props) =>
    props.$centered === "center" &&
    css`
      display: flex;
      flex-direction: column;
      align-items: center;
      padding: 0;
      gap: ${(props) => (props.$gap ? "10px" : "0")};
      margin: ${(props) => (props.$margin ? "60px 30px" : "0")};
    `};
`;
