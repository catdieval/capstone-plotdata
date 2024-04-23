import Heading from "../Heading";
import BarProperties from "../BarProperties";
import LineProperties from "../LineProperties";
import MarkerProperties from "../MarkerProperties";
import LayoutProperties from "../LayoutProperties";

export default function PlottingProperties({
  clickedChartType,
  hasCompletedStep5,
  onHasCompletedStep6,
  hasCompletedStep6,
  settings,
  onSettingsChange,
}) {
  return (
    <>
      {hasCompletedStep5 === true && (
        <>
          <Heading> Step 6: Assign properties to the chart</Heading>
          {clickedChartType === "bar-plot" && (
            <BarProperties
              settings={settings}
              onSettingsChange={onSettingsChange}
              onHasCompletedStep6={onHasCompletedStep6}
            />
          )}
          {clickedChartType === "line-plot" && (
            <LineProperties
              settings={settings}
              onSettingsChange={onSettingsChange}
              onHasCompletedStep6={onHasCompletedStep6}
            />
          )}
          {(clickedChartType === "scatter-plot" ||
            clickedChartType === "line-markers-plot") && (
            <MarkerProperties
              settings={settings}
              onSettingsChange={onSettingsChange}
              onHasCompletedStep6={onHasCompletedStep6}
            />
          )}
          {hasCompletedStep6 === true && (
            <LayoutProperties
              settings={settings}
              onSettingsChange={onSettingsChange}
            />
          )}
        </>
      )}
    </>
  );
}
