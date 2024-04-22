import styled, { css } from "styled-components";

export const Container = styled.section`
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
      gap: ${(props) => (props.$gap ? "10px" : "")};
      margin: ${(props) => (props.$margin ? "60px 30px" : "")};
    `};
`;
