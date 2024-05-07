import GridProperties from "../GridProperties";
import { StyledH3 } from "../Heading";
import LogScaleProperties from "../LogScaleProperties";
import RangeProperties from "../RangeProperties";
import InputTypeSubmit from "../InputTypeSubmit";
import Container from "../Container";

export default function LayoutProperties({
  settings,
  onSettingsChange,
  onHasCompletedStep6,
}) {
  function handleSubmit(event) {
    event.preventDefault();
  }

  function notCompletedLayoutProperties() {
    return (
      settings.gridXAxis.length === 0 ||
      settings.gridYAxis.length === 0 ||
      settings.rangeXAxis.length === 0 ||
      settings.rangeYAxis.length === 0 ||
      settings.logXAxis.length === 0 ||
      settings.logYAxis.length === 0
    );
  }

  return (
    <>
      <StyledH3>Layout</StyledH3>
      <form onSubmit={handleSubmit}>
        <GridProperties
          settings={settings}
          onSettingsChange={onSettingsChange}
        />
        <RangeProperties
          settings={settings}
          onSettingsChange={onSettingsChange}
        />
        <LogScaleProperties
          settings={settings}
          onSettingsChange={onSettingsChange}
        />
        <Container $centered="center">
          <InputTypeSubmit
            value="Assign layout properties and plot"
            onClick={onHasCompletedStep6}
            disabled={notCompletedLayoutProperties()}
          />
        </Container>
      </form>
    </>
  );
}
