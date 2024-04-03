import { useState } from "react";
import Heading from "../Heading";
import { Container } from "../Container";
import Paragraph from "../Paragraph";
import { StyledInputTypeSubmit } from "../StyledInputTypeSubmit";
import DropDownMenu from "../DropDownMenu";
import {
  markerColorArray,
  markerSymbolArray,
  markerSizeArray,
} from "../../lib/listOfMarkerProperties";

export default function MarkerProperties({
  clickedChartType,
  hasCompletedStep5,
  markerColor,
  markerSymbol,
  markerSize,
  onMarkerColorChange,
  onMarkerSymbolChange,
  onMarkerSizeChange,
}) {
  function completedMarkerProperties() {
    return (
      markerColor.length === 0 ||
      markerSymbol.length === 0 ||
      Number(markerSize) === 0
    );
  }

  function handleMarkerProperties() {
    alert("You chose the marker properties.");
  }

  function handleSubmit(event) {
    event.preventDefault();
  }

  return (
    <>
      {hasCompletedStep5 === true &&
        (clickedChartType === "scatter-plot" ||
          clickedChartType === "line-markers-plot") && (
          <>
            <Heading>Marker properties</Heading>
            <form onSubmit={handleSubmit}>
              <Container $centered="center">
                <Paragraph>Marker color:</Paragraph>
                <DropDownMenu
                  onChange={onMarkerColorChange}
                  arrayOfOptions={markerColorArray}
                />
                <Paragraph>Marker symbol:</Paragraph>
                <DropDownMenu
                  onChange={onMarkerSymbolChange}
                  arrayOfOptions={markerSymbolArray}
                />
                <Paragraph>Marker size (in pixels):</Paragraph>
                <DropDownMenu
                  onChange={onMarkerSizeChange}
                  arrayOfOptions={markerSizeArray}
                />
                <br></br>
                <br></br>
                <StyledInputTypeSubmit
                  value="Next"
                  onClick={handleMarkerProperties}
                  disabled={completedMarkerProperties()}
                />
              </Container>
            </form>
          </>
        )}
    </>
  );
}
