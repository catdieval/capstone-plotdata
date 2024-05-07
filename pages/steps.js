import Navigation from "../Components/Navigation";
import { useRouter } from "next/router";
import Container from "../Components/Container";
import Button from "../Components/Button";

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
  const router = useRouter();
  function handleBack() {
    router.push("/");
  }

  return (
    <>
      <Container $centered="center" $margin_bottom>
        <Button $variant="back" onClick={handleBack}>
          Back Home
        </Button>
      </Container>

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
