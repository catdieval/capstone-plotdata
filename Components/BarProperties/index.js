import { barColorArray } from "../../lib/listOfBarProperties.js";
import DropDownMenu from "../DropDownMenu";
import { StyledInputTypeSubmit } from "../StyledInputTypeSubmit";
import { Container } from "../Container";
import Heading from "../Heading";

export default function BarProperties({
  barColor,
  onBarColorChange,
  clickedChartType,
  titleLabel,
}) {
  function handleBarProperties() {
    alert("You chose the bar properties.");
  }
  function handleSubmit(event) {
    event.preventDefault();
  }

  function completedBarProperties() {
    return barColor.length === 0;
  }

  return (
    <>
      {clickedChartType === "bar-plot" && titleLabel.length > 0 && (
        <>
          <Heading> Bar Properties</Heading>
          <form onSubmit={handleSubmit}>
            <Container $centered="center">
              <DropDownMenu
                idString="Bar color"
                onChange={onBarColorChange}
                arrayOfOptions={barColorArray}
              />
              <StyledInputTypeSubmit
                value="Next"
                onClick={handleBarProperties}
                disabled={completedBarProperties()}
              />
            </Container>
          </form>
        </>
      )}
    </>
  );
}
