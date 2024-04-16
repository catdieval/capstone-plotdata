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
  settings,
  onSettingsChange,
}) {
  function handleSubmit(event) {
    event.preventDefault();
  }

  function handleLineProperties() {
    alert(`You have selected the line properties`);
  }

  function completedLineProperties() {
    return (
      settings.lineColor.length === 0 ||
      settings.lineStyle.length === 0 ||
      Number(lineWidth) === 0
    );
  }

  return (
    <>
      {clickedChartType === "line-plot" && settings.titleLabel.length > 0 && (
        <form onSubmit={handleSubmit}>
          <Container $centered="center" $gap>
            <StyledH3>Line properties</StyledH3>
            <Paragraph>Line color</Paragraph>
            <DropDownMenu
              onChange={onSettingsChange}
              arrayOfOptions={lineColorArray}
            />
            <Paragraph>Line style</Paragraph>
            <DropDownMenu
              onChange={onSettingsChange}
              arrayOfOptions={lineStyleArray}
            />
            <Paragraph>Line width (in pixels)</Paragraph>
            <DropDownMenu
              onChange={onSettingsChange}
              arrayOfOptions={lineWidthArray}
            />
            <InputTypeSubmit
              value="Next"
              onClick={handleLineProperties}
              disabled={completedLineProperties()}
            />
          </Container>
        </form>
      )}
    </>
  );
}
