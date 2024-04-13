import { StyledH3 } from "../Heading";
import { Container } from "../Container";
import DropDownMenu from "../DropDownMenu";
import {
  lineColorArray,
  lineStyleArray,
  lineWidthArray,
} from "../../lib/listOfLineProperties";
import { StyledInputTypeSubmit } from "../StyledInputTypeSubmit";
import Paragraph from "../Paragraph";

export default function LineProperties({
  clickedChartType,
  titleLabel,
  onLineColorChange,
  onLineStyleChange,
  onLineWidthChange,
  lineColor,
  lineStyle,
  lineWidth,
}) {
  function handleSubmit(event) {
    event.preventDefault();
  }

  function handleLineProperties() {
    alert(`You have selected the line properties`);
  }

  function completedLineProperties() {
    return (
      lineColor.length === 0 ||
      lineStyle.length === 0 ||
      Number(lineWidth) === 0
    );
  }

  return (
    <>
      {clickedChartType === "line-plot" && titleLabel.length > 0 && (
        <form onSubmit={handleSubmit}>
          <Container $centered="center" $gap>
            <StyledH3>Line properties</StyledH3>
            <Paragraph>Line color</Paragraph>
            <DropDownMenu
              onChange={onLineColorChange}
              arrayOfOptions={lineColorArray}
            />
            <Paragraph>Line style</Paragraph>
            <DropDownMenu
              onChange={onLineStyleChange}
              arrayOfOptions={lineStyleArray}
            />
            <Paragraph>Line width (in pixels)</Paragraph>
            <DropDownMenu
              onChange={onLineWidthChange}
              arrayOfOptions={lineWidthArray}
            />
            <StyledInputTypeSubmit
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
