import DialogBox from "../DialogBox";
import { useState } from "react";
import Paragraph from "../Paragraph";
import { Container } from "../Container";
import styled from "styled-components";
import InputTypeRadio from "../InputTypeRadio";

const TitleWrapper = styled.div`
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
      <TitleWrapper>
        <Container $centered="center">
          <Paragraph $variant="border">
            Logarithmic scale for the axes
          </Paragraph>
          <InfoButtonWrapper>
            <DialogBox />
          </InfoButtonWrapper>
        </Container>
      </TitleWrapper>
      <Container $wrap="wrap">
        <Container $direction="column" $center>
          <Paragraph $variant="bold">For x-axis</Paragraph>
          <Container $direction="column">
            <InputTypeRadio
              labelString="yes"
              idString="yes"
              valueString="true"
              onChange={handleLogAxes}
              nameString="logXAxes"
            />
            <InputTypeRadio
              labelString="no, use a linear scale"
              idString="no"
              valueString="false"
              onChange={handleLogAxes}
              nameString="logXAxes"
            />
          </Container>
        </Container>
        <Container $direction="column" $center>
          <Paragraph $variant="bold">For y-axis</Paragraph>
          <Container $direction="column">
            <InputTypeRadio
              labelString="yes"
              idString="yes"
              valueString="true"
              onChange={handleLogAxes}
              nameString="logYAxes"
            />
            <InputTypeRadio
              labelString="no, use a linear scale"
              idString="no"
              valueString="false"
              onChange={handleLogAxes}
              nameString="logYAxes"
            />
          </Container>
        </Container>
      </Container>
    </>
  );
}
