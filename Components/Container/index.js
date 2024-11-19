import styled, { css } from "styled-components";

const Container = styled.section`
  ${(props) =>
    props.$direction === "column" &&
    css`
      display: flex;
      flex-direction: column;
      flex-wrap: wrap;
      gap: ${(props) => (props.$gap ? "4px" : "0px")};
      align-items: ${(props) => (props.$center ? "center" : "")};
      justify-content: space-between;
    `};

  ${(props) =>
    props.$wrap === "wrap" &&
    css`
      display: flex;
      flex-wrap: wrap;
      justify-content: center;
      gap: ${(props) => (props.$gap ? "1rem" : "3rem")};
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
      margin: ${(props) => (props.$margin ? "30px" : "0")};
      margin-bottom: ${(props) => (props.$margin_bottom ? "30px" : "0")};
      margin-top: ${(props) => (props.$margin_top ? "30px" : "0")};
    `};

  ${(props) =>
    props.$direction === "row" &&
    css`
      display: flex;
      flex-direction: row;
      align-items: flex-start;
      gap: 1rem;
    `};
`;

export default Container;
