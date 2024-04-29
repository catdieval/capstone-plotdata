import Navigation from "@/Components/Navigation";

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
  onHasCompletedDistProp,
  hasCompletedDistProp,
  onHasCompletedStep6,
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
        onHasCompletedDistProp={onHasCompletedDistProp}
        hasCompletedDistProp={hasCompletedDistProp}
        onHasCompletedStep6={onHasCompletedStep6}
        keynames={keynames}
      />
    </>
  );
}
