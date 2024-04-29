import { StyledH3 } from "../Heading";
import Container from "../Container";
import DropDownMenu from "../DropDownMenu";
import {
  lineColorArray,
  lineStyleArray,
  lineWidthArray,
} from "../../lib/listOfLineProperties";
import Paragraph from "../Paragraph";

export default function LineProperties({ onSettingsChange }) {
  function handleSubmit(event) {
    event.preventDefault();
  }
  return (
    <form onSubmit={handleSubmit}>
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
    </form>
  );
}
