import { barColorArray } from "../../lib/listOfBarProperties.js";
import DropDownMenu from "../DropDownMenu";
import InputTypeSubmit from "../InputTypeSubmit";
import Container from "../Container";
import { StyledH3 } from "../Heading";
import Paragraph from "../Paragraph";

export default function BarProperties({
  onHasCompletedDistProp,
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
      <StyledH3>Bar properties</StyledH3>
      <form onSubmit={handleSubmit}>
        <Container $centered="center">
          <Paragraph>Bar color:</Paragraph>
          <DropDownMenu
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
  );
}
