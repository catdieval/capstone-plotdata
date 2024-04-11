import DialogBox from "../DialogBox";
import { useState } from "react";
import Paragraph from "../Paragraph";
import { Container } from "../Container";

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
      <Container $direction="row">
        <Paragraph $variant="border">Logarithmic scale for the axes</Paragraph>
        <DialogBox />
      </Container>
    </>
  );
}
