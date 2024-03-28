import { StyledH3 } from "../Heading";
import { useState } from "react";
import { Container } from "../Container";
import DropDownMenu from "../DropDownMenu";
import {
  lineColorArray,
  lineStyleArray,
  lineWidthArray,
} from "../../lib/listOfLineProperties";

import { StyledInputTypeSubmit } from "../StyledInputTypeSubmit";

export default function LineProperties({
  clickedChartType,
  titleLabel,
  onLineColorChange,
  onLineStyleChange,
  onLineWidthChange,
  lineColor,
  lineStyle,
  lineWidth,
}) {
  function handleSubmit(event) {
    event.preventDefault();
  }
  console.log(lineColor);
  function handleLineProperties() {
    confirm(
      `You have applied for line-color: ${lineColor}, line-style: ${lineStyle} and line-width: ${lineWidth} `
    );
  }

  return (
    <>
      {clickedChartType === "line-plot" && titleLabel.length > 0 && (
        <form onSubmit={handleSubmit}>
          <Container $centered="center" $gap>
            <StyledH3>Line Properties</StyledH3>
            <DropDownMenu
              idString="Line Color"
              onChange={onLineColorChange}
              arrayOfOptions={lineColorArray}
            />
            <DropDownMenu
              idString="Line Style"
              onChange={onLineStyleChange}
              arrayOfOptions={lineStyleArray}
            />
            <DropDownMenu
              idString="Line Width"
              onChange={onLineWidthChange}
              arrayOfOptions={lineWidthArray}
            />
            <StyledInputTypeSubmit
              value="Next"
              onClick={handleLineProperties}
              disabled={
                lineColor.length === 0 ||
                lineStyle.length === 0 ||
                Number(lineWidth) === 0
              }
            />
          </Container>
        </form>
      )}
    </>
  );
}
