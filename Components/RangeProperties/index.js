import Paragraph from "../Paragraph";
import InputTypeRadio from "../InputTypeRadio";
import { Container } from "../Container";
import InputTypeNumber from "../InputTypeNumber";

export default function RangeProperties({ range, onRangeChange }) {
  return (
    <>
      <Paragraph>Range of values for axes:</Paragraph>
      <Container $wrap="wrap">
        <Container $centered="center">
          <Paragraph>Autorange for x-axis:</Paragraph>
          <Container $direction="column">
            <InputTypeRadio
              nameString="rangeXAxis"
              valueString="false"
              idString="normal range"
              onChange={onRangeChange}
              labelString="yes, normal range"
            />
            <InputTypeRadio
              nameString="rangeXAxis"
              valueString="reversed"
              idString="reversed range"
              onChange={onRangeChange}
              labelString="yes, reversed range"
            />
            <InputTypeRadio
              nameString="rangeXAxis"
              valueString="min max"
              idString="min max"
              onChange={onRangeChange}
              labelString="no, set minimum and maximum"
            />
          </Container>
        </Container>
        <Container $centered="center">
          <Paragraph>Autorange for y-axis:</Paragraph>
          <Container $direction="column">
            <InputTypeRadio
              nameString="rangeYAxis"
              valueString="false"
              idString="normal range"
              onChange={onRangeChange}
              labelString="yes, normal range"
            />
            <InputTypeRadio
              nameString="rangeYAxis"
              valueString="reversed"
              idString="reversed range"
              onChange={onRangeChange}
              labelString="yes, reversed range"
            />
            <InputTypeRadio
              nameString="rangeYAxis"
              valueString="min max"
              idString="min max"
              onChange={onRangeChange}
              labelString="no, set minimum and maximum"
            />
          </Container>
        </Container>
      </Container>
      {(range.rangeXAxis === "min max" || range.rangeYAxis === "min max") && (
        <Paragraph>Minimum and maximum values for axis:</Paragraph>
      )}
      <Container $wrap="wrap">
        <Container $centered="center">
          {range.rangeXAxis === "min max" && (
            <>
              <Paragraph>x-axis:</Paragraph>
              <InputTypeNumber
                nameString="minXAxis"
                idString="minXAxis"
                onChange={onRangeChange}
                labelString="min:"
                placeholderString="Number (e.g. 10, 0.1, -1)"
              />
              <InputTypeNumber
                nameString="maxXAxis"
                idString="maxXAxis"
                onChange={onRangeChange}
                labelString="max:"
                placeholderString="Number (e.g. 10, 0.1, -1)"
              />
            </>
          )}
        </Container>
        <Container $centered="center">
          {range.rangeYAxis === "min max" && (
            <>
              <Paragraph>y-axis:</Paragraph>
              <InputTypeNumber
                nameString="minYAxis"
                idString="minYAxis"
                onChange={onRangeChange}
                labelString="min:"
                placeholderString="Number (e.g. 10, 0.1, -1)"
              />
              <InputTypeNumber
                nameString="maxYAxis"
                idString="maxYAxis"
                onChange={onRangeChange}
                labelString="max:"
                placeholderString="Number (e.g. 10, 0.1, -1)"
              />
            </>
          )}
        </Container>
      </Container>
    </>
  );
}
