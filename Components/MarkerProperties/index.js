import { StyledH3 } from "../Heading";
import Container from "../Container";
import Paragraph from "../Paragraph";
import InputTypeSubmit from "../InputTypeSubmit";
import DropDownMenu from "../DropDownMenu";
import {
  markerColorArray,
  markerSymbolArray,
  markerSizeArray,
} from "../../lib/listOfMarkerProperties";

export default function MarkerProperties({
  clickedChartType,
  hasCompletedStep5,
  settings,
  onSettingsChange,
}) {
  function notCompletedMarkerProperties() {
    return (
      settings.markerColor.length === 0 ||
      settings.markerSymbol.length === 0 ||
      Number(settings.markerSize) === 0
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
                  onChange={onSettingsChange}
                  arrayOfOptions={markerColorArray}
                />
                <Paragraph>Marker symbol:</Paragraph>
                <DropDownMenu
                  onChange={onSettingsChange}
                  arrayOfOptions={markerSymbolArray}
                />
                <Paragraph>Marker size (in pixels):</Paragraph>
                <DropDownMenu
                  onChange={onSettingsChange}
                  arrayOfOptions={markerSizeArray}
                />
                <InputTypeSubmit
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
