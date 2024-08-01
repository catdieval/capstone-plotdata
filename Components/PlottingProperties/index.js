import BarProperties from "../BarProperties";
import LineProperties from "../LineProperties";
import MarkerProperties from "../MarkerProperties";
import LayoutProperties from "../LayoutProperties";

export default function PlottingProperties({
  onDisableNextButton,
  onNext,
  onBack,
  clickedChartType,
  settings,
  onSettingsChange,
}) {
  return (
    <>
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
    </>
  );
}
