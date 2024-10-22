import { StyledH3 } from "../Heading";
import Container from "../Container";
import Paragraph from "../Paragraph";
import DropDownMenu from "../DropDownMenu";
import {
  markerColorArray,
  markerSymbolArray,
  markerSizeArray,
} from "../../lib/listOfMarkerProperties";

export default function MarkerProperties({ onSettingsChange }) {

  return (
    <>
      <Container $centered="center" $gap $margin>
        <StyledH3>Marker properties</StyledH3>
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
      </Container>
    </>
  );
}
