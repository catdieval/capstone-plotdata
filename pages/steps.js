import Navigation from "@/Components/Navigation";
import Plotting from "@/Components/Plotting";

export default function AllSteps({
  onBackChange,
  onNextChange,
  onStepChange,
  currentStep,
  fileObj,
  onUploadFile,
  onConversion,
  keynames,
  onSelectChartType,
  clickedChartType,
  onXChange,
  onYChange,
  xKey,
  yKey,
  onAssignVariables,
  xVariable,
  yVariable,
  hasCompletedStep6,
  settings,
  onSettingsChange,
}) {
  return (
    <>
      <Navigation
        onNextChange={onNextChange}
        onBackChange={onBackChange}
        onStepChange={onStepChange}
        currentStep={currentStep}
        fileObj={fileObj}
        onUploadFile={onUploadFile}
        onConversion={onConversion}
        onSelectChartType={onSelectChartType}
        clickedChartType={clickedChartType}
        onAssignVariables={onAssignVariables}
        onXChange={onXChange}
        onYChange={onYChange}
        xKey={xKey}
        yKey={yKey}
        xVariable={xVariable}
        yVariable={yVariable}
        settings={settings}
        onSettingsChange={onSettingsChange}
        keynames={keynames}
      />
      <Plotting
        clickedChartType={clickedChartType}
        xVariable={xVariable}
        yVariable={yVariable}
        settings={settings}
        hasCompletedStep6={hasCompletedStep6}
        onSettingsChange={onSettingsChange}
      />
    </>
  );
}
