import { StyledH3 } from "../Heading";
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
  function notCompletedMarkerProperties() {
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
            <StyledH3>Marker properties</StyledH3>
            <form onSubmit={handleSubmit}>
              <Container $centered="center" $gap>
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
                <StyledInputTypeSubmit
                  value="Next"
                  onClick={handleMarkerProperties}
                  disabled={notCompletedMarkerProperties()}
                />
              </Container>
            </form>
          </>
        )}
    </>
  );
}
