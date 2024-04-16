import InputTypeRadio from "../InputTypeRadio";
import Paragraph from "../Paragraph";
import Container from "../Container";
import DropDownMenu from "../DropDownMenu";
import { lineStyleArray } from "../../lib/listOfLineProperties";

export default function GridProperties({ grid, onGridChange }) {
  return (
    <>
      <Paragraph>Show grid (helper lines) for axes: </Paragraph>
      <Container $wrap="wrap">
        <Container $centered="center">
          <Paragraph>For x-axis:</Paragraph>
          <Container $direction="row">
            <InputTypeRadio
              nameString="gridXAxis"
              valueString="true"
              idString="yes"
              onChange={onGridChange}
              labelString="Yes"
            />
            <InputTypeRadio
              nameString="gridXAxis"
              valueString="false"
              idString="no"
              onChange={onGridChange}
              labelString="No"
            />
          </Container>
        </Container>
        <Container $centered="center">
          <Paragraph>For y-axis:</Paragraph>
          <Container $direction="row">
            <InputTypeRadio
              nameString="gridYAxis"
              valueString="true"
              idString="yes"
              onChange={onGridChange}
              labelString="Yes"
            />
            <InputTypeRadio
              nameString="gridYAxis"
              valueString="false"
              idString="no"
              onChange={onGridChange}
              labelString="No"
            />
          </Container>
        </Container>
      </Container>
      {(grid.gridXAxis === "true" || grid.gridYAxis === "true") && (
        <Paragraph>Grid linestyle:</Paragraph>
      )}
      <Container $wrap="wrap">
        {grid.gridXAxis === "true" && (
          <DropDownMenu
            idString="x-axis"
            nameString="gridLineStyleXAxis"
            arrayOfOptions={lineStyleArray}
            onChange={onGridChange}
          />
        )}
        {grid.gridYAxis === "true" && (
          <DropDownMenu
            idString="y-axis"
            nameString="gridLineStyleYAxis"
            arrayOfOptions={lineStyleArray}
            onChange={onGridChange}
          />
        )}
      </Container>
    </>
  );
}
