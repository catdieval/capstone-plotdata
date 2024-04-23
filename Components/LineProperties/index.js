import { StyledH3 } from "../Heading";
import Container from "../Container";
import DropDownMenu from "../DropDownMenu";
import {
  lineColorArray,
  lineStyleArray,
  lineWidthArray,
} from "../../lib/listOfLineProperties";
import InputTypeSubmit from "../InputTypeSubmit";
import Paragraph from "../Paragraph";

export default function LineProperties({
  clickedChartType,
  onHasCompletedDistProp,
  hasCompletedStep5,
  settings,
  onSettingsChange,
}) {
  function handleSubmit(event) {
    event.preventDefault();
  }

  function notCompletedLineProperties() {
    return (
      settings.lineColor.length === 0 ||
      settings.lineStyle.length === 0 ||
      Number(settings.lineWidth) === 0
    );
  }

  return (
    <>
      {hasCompletedStep5 === true && clickedChartType === "line-plot" && (
        <form onSubmit={handleSubmit}>
          <Container $centered="center" $gap>
            <StyledH3>Line properties</StyledH3>
            <Paragraph>Line color</Paragraph>
            <DropDownMenu
              nameString="lineColor"
              onChange={onSettingsChange}
              arrayOfOptions={lineColorArray}
            />
            <Paragraph>Line style</Paragraph>
            <DropDownMenu
              nameString="lineStyle"
              onChange={onSettingsChange}
              arrayOfOptions={lineStyleArray}
            />
            <Paragraph>Line width (in pixels)</Paragraph>
            <DropDownMenu
              nameString="lineWidth"
              onChange={onSettingsChange}
              arrayOfOptions={lineWidthArray}
            />
            <InputTypeSubmit
              value="Next"
              onClick={onHasCompletedDistProp}
              disabled={notCompletedLineProperties()}
            />
          </Container>
        </form>
      )}
    </>
  );
}
