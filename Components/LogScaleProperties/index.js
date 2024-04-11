import DialogBox from "../DialogBox";
import { useState } from "react";
import Paragraph from "../Paragraph";
import { Container } from "../Container";

export default function LogScaleProperties() {
  const initialLogScaleStates = {
    logXAxis: "",
    logYAxis: "",
  };

  const [logScaleAxis, setLogScaleAxis] = useState(initialLogScaleStates);
  return (
    <>
      <Container $direction="row">
        <Paragraph $variant="border">Logarithmic scale for the axes</Paragraph>
        <DialogBox />
      </Container>
    </>
  );
}
