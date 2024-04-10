import InputTypeRadio from "../InputTypeRadio";
import Paragraph from "../Paragraph";
import { Container } from "../Container";
import DropDownMenu from "../DropDownMenu";
import { lineStyleArray } from "../../lib/listOfLineProperties";

export default function GridProperties({ grid, onGridChange }) {
  return (
    <>
      <Paragraph>Show grid (helper lines) for axis: </Paragraph>
      <Container $wrap="wrap">
        <Container $centered="center">
          <Paragraph>For x-Axis:</Paragraph>
          <Container $direction="row">
            <InputTypeRadio
              name="gridXAxis"
              value="true"
              idString={"yes"}
              onChange={onGridChange}
              label="Yes"
            />
            <InputTypeRadio
              name="gridXAxis"
              value="false"
              idString={"no"}
              onChange={onGridChange}
              label="No"
            />
          </Container>
        </Container>
        <Container $centered="center">
          <Paragraph>For y-Axis:</Paragraph>
          <Container $direction="row">
            <InputTypeRadio
              name="gridYAxis"
              value="true"
              idString={"yes"}
              onChange={onGridChange}
              label="Yes"
            />
            <InputTypeRadio
              name="gridYAxis"
              value="false"
              idString={"no"}
              onChange={onGridChange}
              label="No"
            />
          </Container>
        </Container>
      </Container>
      {(grid.gridXAxis === "true" || grid.gridYAxis === "true") && (
        <Paragraph>Grid Linestyle:</Paragraph>
      )}
      <Container $wrap="wrap">
        {grid.gridXAxis === "true" && (
          <>
            <DropDownMenu
              idString="x-axis"
              nameString="gridLineStyleXAxis"
              arrayOfOptions={lineStyleArray}
              onChange={onGridChange}
            />
          </>
        )}

        {grid.gridYAxis === "true" && (
          <>
            <DropDownMenu
              idString="y-axis"
              nameString="gridLineStyleYAxis"
              arrayOfOptions={lineStyleArray}
              onChange={onGridChange}
            />
          </>
        )}
      </Container>
    </>
  );
}
