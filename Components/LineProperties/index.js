import Heading from "../Heading";
import { useState } from "react";
import { Container } from "../Container";
import Paragraph from "../Paragraph";
import DropDownMenu from "../DropDownMenu";
import {
  lineColorArray,
  lineStyleArray,
  lineWidthArray,
} from "@/lib/listOfLineProperties";

export default function LineProperties() {
  const [lineColor, setLineColor] = useState("");
  const [lineStyle, setLineStyle] = useState("");
  const [lineWidth, setLineWidth] = useState(0);

  function handleSubmit(event) {
    event.preventDefault();
  }
  function handleLineColorChange(event) {
    setLineColor(event.target.value);
  }

  function handleLineStyleChange(event) {
    setLineStyle(event.target.value);
  }

  function handleLineWidthChange(event) {
    setLineWidth(event.target.value);
  }

  return (
    <Container $centered="center">
      <Heading>Line Properties</Heading>
      <form onSubmit={handleSubmit}>
        <Container>
          {" "}
          <Paragraph> Line color</Paragraph>
          <DropDownMenu
            onChange={handleLineColorChange}
            arrayOfOptions={lineColorArray}
          />
          <Paragraph> Line style</Paragraph>
          <DropDownMenu
            onChange={handleLineStyleChange}
            arrayOfOptions={lineStyleArray}
          />
          <Paragraph> Line width</Paragraph>
          <DropDownMenu
            onChange={handleLineWidthChange}
            arrayOfOptions={lineWidthArray}
          />
        </Container>
      </form>
    </Container>
  );
}
