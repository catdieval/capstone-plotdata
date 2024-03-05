import styled from "styled-components";

const StyledDiv = styled.div`
  flex-direction: ${(props) => (props.$flex - direction ? "row" : "column")};
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
`;

export default function FlexDiv({ children }) {
  return <StyledDiv>{children}</StyledDiv>;
}
