import BarProperties from "../BarProperties";
import LineProperties from "../LineProperties";
import MarkerProperties from "../MarkerProperties";
import LayoutProperties from "../LayoutProperties";
import InputTypeSubmit from "../InputTypeSubmit";
import {ButtonContainer} from "../Navigation/styledNavigation";
import Button from "../Button";

export default function PlottingProperties({
  onDisableNextButton,
  onNext,
  onBack,
  clickedChartType,
  settings,
  onSettingsChange,
}) {
  function handleSubmit(event) {
    event.preventDefault();
  }

  return (
    <>
    <form onSubmit={handleSubmit}>
      {clickedChartType === "bar-plot" && (
        <BarProperties
          settings={settings}
          onSettingsChange={onSettingsChange}
        />
      )}
      {clickedChartType === "line-plot" && (
        <LineProperties
          settings={settings}
          onSettingsChange={onSettingsChange}
        />
      )}
      {(clickedChartType === "scatter-plot" ||
        clickedChartType === "line-markers-plot") && (
        <MarkerProperties
          settings={settings}
          onSettingsChange={onSettingsChange}
        />
      )}
      <LayoutProperties
        onDisableNextButton={onDisableNextButton}
        onNext={onNext}
        onBack={onBack}
        settings={settings}
        onSettingsChange={onSettingsChange}
      />
      <ButtonContainer>
        <Button $variant="back" onClick={onBack}>
          Back
        </Button>
        <InputTypeSubmit
          valueString="Finish"
          onClick={onNext}
          disabled={onDisableNextButton}
        />  
      </ButtonContainer>
    </form>
    </>
  );
}
