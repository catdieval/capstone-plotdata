import StepItem from "../StepItem";
import Button from "../Button";
import { ButtonContainer, StepperContainer } from "./styledNavigation";
import { arrayOfSteps } from "../../lib/arrayOfSteps";
import AllSteps from "../AllSteps";

export default function Navigation({
  onNextChange,
  onBackChange,
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
  settings,
  onSettingsChange,
}) {
  function handleDisabledButton() {
    if (currentStep === 1) {
      return fileObj === null || fileObj === undefined;
    } else if (currentStep === 2) {
      return clickedChartType === "";
    } else if (currentStep === 3) {
      return xKey.length === 0 || yKey.length === 0;
    } else if (currentStep === 4) {
      return settings.xLabel.length === 0 || settings.yLabel.length === 0;
    } else if (currentStep === 5) {
      return settings.titleLabel.length === 0;
    } else if (currentStep === 6) {
      return (
        settings.gridXAxis.length === 0 ||
        settings.gridYAxis.length === 0 ||
        settings.rangeXAxis.length === 0 ||
        settings.rangeYAxis.length === 0 ||
        settings.logXAxis.length === 0 ||
        settings.logYAxis.length === 0
      );
    }
  }
  return (
    <StepperContainer>
      <nav>
        {arrayOfSteps.map(({ id, label }) => {
          return (
            <>
              <StepItem
                key={id}
                label={label}
                name={id}
                id={id}
                currentStep={currentStep}
                onStepChange={() => onStepChange(id)}
              />
              <AllSteps
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
                currentStep={currentStep}
                id={id}
              />
              <ButtonContainer>
                {currentStep > 1 && currentStep === id ? (
                  <Button $variant="back" onClick={onBackChange}>
                    Back
                  </Button>
                ) : null}
                {currentStep === id && (
                  <Button
                    $variant="next"
                    onClick={onNextChange}
                    disabled={handleDisabledButton()}
                  >
                    {currentStep === arrayOfSteps.length ? "Plot" : "Next"}
                  </Button>
                )}
              </ButtonContainer>
            </>
          );
        })}
      </nav>
    </StepperContainer>
  );
}
