import { StyledH3 } from "../Heading";
import { useState } from "react";
import { Container } from "../Container";
import DropDownMenu from "../DropDownMenu";
import {
  lineColorArray,
  lineStyleArray,
  lineWidthArray,
} from "@/lib/listOfLineProperties";
import { Card } from "../Card/card.styled";

export default function LineProperties({ clickedChartType, titleLabel }) {
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
    <>
      <form onSubmit={handleSubmit}>
        <Container $centered="center">
          <StyledH3>Line Properties</StyledH3>
          <DropDownMenu
            idString="Line Color"
            onChange={handleLineColorChange}
            arrayOfOptions={lineColorArray}
          />
          <DropDownMenu
            idString="Line Style"
            onChange={handleLineStyleChange}
            arrayOfOptions={lineStyleArray}
          />
          <DropDownMenu
            idString="Line Width"
            onChange={handleLineWidthChange}
            arrayOfOptions={lineWidthArray}
          />
        </Container>
      </form>
    </>
  );
}
