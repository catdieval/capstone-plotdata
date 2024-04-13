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

export default function LogScaleProperties({ onLogScaleChange }) {
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
              valueString="false"
              onChange={onLogScaleChange}
              nameString="logXAxis"
            />
            <InputTypeRadio
              labelString="no, use a linear scale"
              idString="no"
              valueString="true"
              onChange={onLogScaleChange}
              nameString="logXAxis"
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
              onChange={onLogScaleChange}
              nameString="logYAxis"
            />
            <InputTypeRadio
              labelString="no, use a linear scale"
              idString="no"
              valueString="false"
              onChange={onLogScaleChange}
              nameString="logYAxis"
            />
          </Container>
        </Container>
      </Container>
    </>
  );
}
