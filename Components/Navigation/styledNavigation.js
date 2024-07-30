import styled from "styled-components";

export const ButtonContainer = styled.div`
  display: flex;
  gap: 1rem;
  justify-content: center;
  align-items: center;
  margin-bottom: 0.5rem;
  margin-top: ${(props) => (props.$margin_top ? "-2rem" : "1rem")}; 
`;

export const StepperContainer = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-left: 0.3rem;
  margin-top: -20px;
`;

export const SingleStepContainer = styled.section`
  display: flex;
  align-items: center;
  justify-content: flex-start;
`;

export const StyledList = styled.li`
  list-style-type: none;
`;
