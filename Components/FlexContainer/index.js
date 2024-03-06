import styled from "styled-components";

export const FlexContainer = styled.section`
  flex-direction: ${(props) =>
    props.$direction === "column" ? "column" : "row"};
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
`;
