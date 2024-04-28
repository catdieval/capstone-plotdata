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
        keynames={keynames}
      />
    </>
  );
}
