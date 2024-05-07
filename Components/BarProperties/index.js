import { barColorArray } from "../../lib/listOfBarProperties.js";
import DropDownMenu from "../DropDownMenu";
import Container from "../Container";
import { StyledH3 } from "../Heading";
import Paragraph from "../Paragraph";

export default function BarProperties({ onSettingsChange }) {
  function handleSubmit(event) {
    event.preventDefault();
  }

  return (
    <>
      <Container $centered="center" $margin>
        <StyledH3>Bar properties</StyledH3>
        <form onSubmit={handleSubmit}>
          <Paragraph>Bar color:</Paragraph>
          <DropDownMenu
            nameString="barColor"
            onChange={onSettingsChange}
            arrayOfOptions={barColorArray}
          />
        </form>
      </Container>
    </>
  );
}
