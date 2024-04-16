import { barColorArray } from "../../lib/listOfBarProperties.js";
import DropDownMenu from "../DropDownMenu";
import InputTypeSubmit from "../InputTypeSubmit";
import Container from "../Container";
import { StyledH3 } from "../Heading";

export default function BarProperties({
  clickedChartType,
  settings,
  onSettingsChange,
}) {
  function handleBarProperties() {
    alert("You chose the bar properties.");
  }
  function handleSubmit(event) {
    event.preventDefault();
  }

  function completedBarProperties() {
    return settings.barColor.length === 0;
  }

  return (
    <>
      {clickedChartType === "bar-plot" && titleLabel.length > 0 && (
        <>
          <StyledH3> Bar properties</StyledH3>
          <form onSubmit={handleSubmit}>
            <Container $centered="center">
              <DropDownMenu
                idString="Bar color"
                onChange={onSettingsChange}
                arrayOfOptions={barColorArray}
              />
              <InputTypeSubmit
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
