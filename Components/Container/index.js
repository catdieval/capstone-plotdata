import styled, { css } from "styled-components";

const Container = styled.section`
  ${(props) =>
    props.$direction === "column" &&
    css`
      display: flex;
      flex-direction: column;
      flex-wrap: wrap;
      align-items: ${(props) => (props.$center ? "center" : "start")};
      justify-content: space-around;
      gap: ${(props) => (props.$gap ? "4px" : "0px")};
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
      gap: ${(props) => (props.$gap ? "10px" : "")};
      margin: ${(props) => (props.$margin ? "60px 30px" : "")};
    `};
`;

export default Container;
