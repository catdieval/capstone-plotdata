import { barColorArray } from "../../lib/listOfBarProperties.js";
import DropDownMenu from "../DropDownMenu";
import InputTypeSubmit from "../InputTypeSubmit";
import Container from "../Container";
import { StyledH3 } from "../Heading";

export default function BarProperties({
  clickedChartType,
  onHasCompletedDistProp,
  hasCompletedStep5,
  settings,
  onSettingsChange,
}) {
  function handleSubmit(event) {
    event.preventDefault();
  }

  function notCompletedBarProperties() {
    return settings.barColor.length === 0;
  }

  return (
    <>
      {hasCompletedStep5 && clickedChartType === "bar-plot" && (
        <>
          <StyledH3>Bar properties</StyledH3>
          <form onSubmit={handleSubmit}>
            <Container $centered="center">
              <DropDownMenu
                idString="Bar color"
                nameString="barColor"
                onChange={onSettingsChange}
                arrayOfOptions={barColorArray}
              />
              <InputTypeSubmit
                value="Next"
                onClick={onHasCompletedDistProp}
                disabled={notCompletedBarProperties()}
              />
            </Container>
          </form>
        </>
      )}
    </>
  );
}
