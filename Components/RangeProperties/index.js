import Paragraph from "../Paragraph";
import InputTypeRadio from "../InputTypeRadio";
import Container from "../Container";
import InputTypeNumber from "../InputTypeNumber";

export default function RangeProperties({ settings, onSettingsChange }) {
  return (
    <>
      <Container $centered="center">
        <Paragraph $variant="border">Range of values for axes:</Paragraph>
      </Container>
      <Container $wrap="wrap">
        <Container $centered="center">
          <Paragraph $variant="bold">Autorange for x-axis:</Paragraph>
          <Container $direction="column" $gap>
            <InputTypeRadio
              nameString="rangeXAxis"
              valueString="true"
              idString="normal range X"
              onChange={onSettingsChange}
              labelString="yes, normal range"
            />
            <InputTypeRadio
              nameString="rangeXAxis"
              valueString="reversed"
              idString="reversed range X"
              onChange={onSettingsChange}
              labelString="yes, reversed range"
            />
            <InputTypeRadio
              nameString="rangeXAxis"
              valueString="min max"
              idString="min max X"
              onChange={onSettingsChange}
              labelString="no, set minimum and maximum"
            />
          </Container>
        </Container>
        <Container $centered="center">
          <Paragraph $variant="bold">Autorange for y-axis:</Paragraph>
          <Container $direction="column" $gap>
            <InputTypeRadio
              nameString="rangeYAxis"
              valueString="true"
              idString="normal range Y"
              onChange={onSettingsChange}
              labelString="yes, normal range"
            />
            <InputTypeRadio
              nameString="rangeYAxis"
              valueString="reversed"
              idString="reversed range Y"
              onChange={onSettingsChange}
              labelString="yes, reversed range"
            />
            <InputTypeRadio
              nameString="rangeYAxis"
              valueString="min max"
              idString="min max Y"
              onChange={onSettingsChange}
              labelString="no, set minimum and maximum"
            />
          </Container>
        </Container>
      </Container>
      {(settings.rangeXAxis === "min max" ||
        settings.rangeYAxis === "min max") && (
        <Container $centered="center">
          <Paragraph $variant="border">
            Minimum and maximum values for axis:
          </Paragraph>
        </Container>
      )}
      <Container $wrap="wrap">
        <Container $centered="center">
          {settings.rangeXAxis === "min max" && (
            <>
              <Paragraph>x-axis:</Paragraph>
              <InputTypeNumber
                nameString="minXAxis"
                idString="minXAxis"
                onChange={onSettingsChange}
                labelString="min:"
                placeholderString="Number (e.g. 10, 0.1, -1)"
              />
              <InputTypeNumber
                nameString="maxXAxis"
                idString="maxXAxis"
                onChange={onSettingsChange}
                labelString="max:"
                placeholderString="Number (e.g. 10, 0.1, -1)"
              />
            </>
          )}
        </Container>
        <Container $centered="center">
          {settings.rangeYAxis === "min max" && (
            <>
              <Paragraph>y-axis:</Paragraph>
              <InputTypeNumber
                nameString="minYAxis"
                idString="minYAxis"
                onChange={onSettingsChange}
                labelString="min:"
                placeholderString="Number (e.g. 10, 0.1, -1)"
              />
              <InputTypeNumber
                nameString="maxYAxis"
                idString="maxYAxis"
                onChange={onSettingsChange}
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
