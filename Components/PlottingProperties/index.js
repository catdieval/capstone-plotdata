import BarProperties from "../BarProperties";
import LineProperties from "../LineProperties";
import MarkerProperties from "../MarkerProperties";
import LayoutProperties from "../LayoutProperties";

export default function PlottingProperties({
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
        settings={settings}
        onSettingsChange={onSettingsChange}
      />
    </>
  );
}
