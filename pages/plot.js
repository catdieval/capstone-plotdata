import Plotting from "../Components/Plotting";

export default function Plot({
  xVariable,
  yVariable,
  hasCompletedAllSteps,
  settings,
  onSettingsChange,
  clickedChartType,
}) {
  return (
    <Plotting
      clickedChartType={clickedChartType}
      xVariable={xVariable}
      yVariable={yVariable}
      settings={settings}
      hasCompletedAllSteps={hasCompletedAllSteps}
      onSettingsChange={onSettingsChange}
    />
  );
}
