import { StyledH3 } from "../Heading";
import Container from "../Container";
import DropDownMenu from "../DropDownMenu";
import Paragraph from "../Paragraph";
import {
  lineColorArray,
  lineStyleArray,
  lineWidthArray,
} from "../../lib/listOfLineProperties";

export default function LineProperties({ onSettingsChange }) {
  
  return (
      <Container $centered="center" $gap $margin>
        <StyledH3>Line properties</StyledH3>
        <Paragraph>Line color:</Paragraph>
        <DropDownMenu
          nameString="lineColor"
          onChange={onSettingsChange}
          arrayOfOptions={lineColorArray}
        />
        <Paragraph>Line style:</Paragraph>
        <DropDownMenu
          nameString="lineStyle"
          onChange={onSettingsChange}
          arrayOfOptions={lineStyleArray}
        />
        <Paragraph>Line width (in pixels):</Paragraph>
        <DropDownMenu
          nameString="lineWidth"
          onChange={onSettingsChange}
          arrayOfOptions={lineWidthArray}
        />
      </Container>
  );
}
