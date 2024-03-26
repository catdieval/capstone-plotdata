import { barColorArray } from "@/lib/listOfBarProperties";
import DropDownMenu from "../DropDownMenu";
import { StyledInputTypeSubmit } from "../StyledInputTypeSubmit";
import Heading from "../Heading";
import { Container } from "../Container";

export default function BarProperties({
  barColor,
  onBarColorChange,
  clickedChartType,
  titleLabel,
}) {
  function handleBarProperties() {
    if (barColor != "") {
      alert("You chose the bar properties.");
    }
  }
  function handleSubmit(event) {
    event.preventDefault();
  }

  function completedBarProperties() {
    return barColor === 0;
  }

  return (
    <>
      {clickedChartType === "bar-plot" && titleLabel.length > 0 ? (
        <>
          <Heading>Bar Properties</Heading>
          <form onSubmit={handleSubmit}>
            <Container $centered="center">
              <DropDownMenu
                idString="Bar color:"
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
      ) : null}
    </>
  );
}
