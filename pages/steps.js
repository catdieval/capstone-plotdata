import Navigation from "../Components/Navigation";

export default function Steps({
  onBack,
  onNext,
  onStepChange,
  currentStep,
  clickedSteps,
  fileObject,
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
  settings,
  onSettingsChange,
}) {
  return (
    <>
      <Navigation
        onNext={onNext}
        onBack={onBack}
        onStepChange={onStepChange}
        currentStep={currentStep}
        fileObject={fileObject}
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
        clickedSteps={clickedSteps}
      />
    </>
  );
}
