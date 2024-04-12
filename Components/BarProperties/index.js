import { barColorArray } from "../../lib/listOfBarProperties.js";
import DropDownMenu from "../DropDownMenu";
import { StyledInputTypeSubmit } from "../StyledInputTypeSubmit";
import { Container } from "../Container";
import { StyledH3 } from "../Heading";

export default function BarProperties({
  barColor,
  onBarColorChange,
  clickedChartType,
  hasCompletedStep5,
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
      {hasCompletedStep5 === true && clickedChartType === "bar-plot" && (
        <>
          <StyledH3> Bar properties</StyledH3>
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
