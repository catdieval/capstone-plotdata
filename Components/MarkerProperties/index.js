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

export default function MarkerProperties({ clickedChartType }) {
  const [markerColor, setMarkerColor] = useState("");
  const [markerSymbol, setMarkerSymbol] = useState("");
  const [markerSize, setMarkerSize] = useState(0);

  function handleMarkerColorChange(event) {
    const choice = event.target.value;
    setMarkerColor(choice);
  }

  function handleMarkerSymbolChange(event) {
    const choice = event.target.value;
    setMarkerSymbol(choice);
  }

  function handleMarkerSizeChange(event) {
    const choice = event.target.value;
    setMarkerSize(choice);
  }

  function completedMarkerProperties() {
    return (
      markerColor.length === 0 ||
      markerSymbol.length === 0 ||
      markerSize.length === 0
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
      {(clickedChartType === "scatter-plot" ||
        clickedChartType === "line-markers-plot") && (
        <>
          <Heading>Marker properties</Heading>
          <form onSubmit={handleSubmit}>
            <Container $centered="center">
              <Paragraph>Marker color:</Paragraph>
              <DropDownMenu
                onChange={handleMarkerColorChange}
                arrayOfOptions={markerColorArray}
              />
              <Paragraph>Marker symbol:</Paragraph>
              <DropDownMenu
                onChange={handleMarkerSymbolChange}
                arrayOfOptions={markerSymbolArray}
              />
              <Paragraph>Marker size:</Paragraph>
              <DropDownMenu
                onChange={handleMarkerSizeChange}
                arrayOfOptions={markerSizeArray}
              />
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
