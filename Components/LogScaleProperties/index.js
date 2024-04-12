import DialogBox from "../DialogBox";
import { useState } from "react";
import Paragraph from "../Paragraph";
import { Container } from "../Container";
import styled from "styled-components";

const MainWrapper = styled.div`
  position: relative;
`;

const InfoButtonWrapper = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(370%, -50%);
`;

export default function LogScaleProperties() {
  const initialLogScaleStates = {
    logXAxis: "",
    logYAxis: "",
  };

  const [logScaleAxes, setLogScaleAxes] = useState(initialLogScaleStates);

  function handleLogAxes(event) {
    setLogScaleAxes({
      ...logScaleAxes,
      [event.target.name]: event.target.value,
    });
  }
  return (
    <>
      <MainWrapper>
        <Container $centered="center">
          <Paragraph $variant="border">
            Logarithmic scale for the axes
          </Paragraph>
          <InfoButtonWrapper>
            <DialogBox />
          </InfoButtonWrapper>
        </Container>
      </MainWrapper>
    </>
  );
}
