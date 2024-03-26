import { barColorArray } from "@/lib/listOfBarProperties";
import DropDownMenu from "../DropDownMenu";
import { StyledInputTypeSubmit } from "../StyledInputTypeSubmit";
import { Container } from "../Container";
import Paragraph from "../Paragraph";

export default function BarProperties({
  barColor,
  onBarColorChange,
  clickedChartType,
  titleLabel,
}) {
  function handleBarProperties() {
    if (barColor.length > 0) {
      alert("You chose the bar properties.");
    }
  }
  function handleSubmit(event) {
    event.preventDefault();
  }

  function completedBarProperties() {
    return barColor.length === 0;
  }

  return (
    <>
      {clickedChartType === "bar-plot" && titleLabel.length > 0 ? (
        <>
          <Paragraph> Bar Properties</Paragraph>
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
      ) : null}
    </>
  );
}
