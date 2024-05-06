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
  onHasCompletedDistributionProperties,
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

  function handleSubmit(event) {
    event.preventDefault();
  }

  return (
    <>
      <StyledH3>Marker properties</StyledH3>
      <form onSubmit={handleSubmit}>
        <Container $centered="center" $gap>
          <Paragraph>Marker color:</Paragraph>
          <DropDownMenu
            nameString="markerColor"
            onChange={onSettingsChange}
            arrayOfOptions={markerColorArray}
          />
          <Paragraph>Marker symbol:</Paragraph>
          <DropDownMenu
            nameString="markerSymbol"
            onChange={onSettingsChange}
            arrayOfOptions={markerSymbolArray}
          />
          <Paragraph>Marker size (in pixels):</Paragraph>
          <DropDownMenu
            nameString="markerSize"
            onChange={onSettingsChange}
            arrayOfOptions={markerSizeArray}
          />
          <InputTypeSubmit
            value="Assign marker properties"
            onClick={onHasCompletedDistributionProperties}
            disabled={notCompletedMarkerProperties()}
          />
        </Container>
      </form>
    </>
  );
}
