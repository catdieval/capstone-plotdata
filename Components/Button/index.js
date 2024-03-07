import styled from "styled-components";

const StyledButton = styled.button`
  background-color: #1f77b4;
  border-radius: 12px;
  border: none;
  padding: 10px;
  cursor: pointer;
  font-size: 16px;
  color: white;
  font-weight: bold;
`;

export default function Button({ children, onClick }) {
  return <StyledButton onClick={onClick}>{children}</StyledButton>;
}
