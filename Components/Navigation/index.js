import StepItem from "../StepItem";
import Button from "../Button";
import {
  ButtonContainer,
  StepperContainer,
  StyledList,
  SingleStepContainer,
} from "./styledNavigation";
import { arrayOfSteps } from "../../lib/arrayOfSteps";
import AllSteps from "../AllSteps";

export default function Navigation({
  onNext,
  onBack,
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
  clickedSteps,
}) {
  function handleDisabledButton() {
    if (currentStep === 1) {
      return !fileObj;
    } else if (currentStep === 2) {
      return !clickedChartType;
    } else if (currentStep === 3) {
      return xKey.length === 0 || yKey.length === 0;
    } else if (currentStep === 4) {
      return settings.xLabel.length === 0 || settings.yLabel.length === 0;
    } else if (currentStep === 5) {
      return settings.titleLabel.length === 0;
    } else if (currentStep === 6) {
      return !(
        settings.gridXAxis &&
        settings.gridYAxis &&
        settings.rangeXAxis &&
        settings.rangeYAxis &&
        settings.logXAxis &&
        settings.logYAxis
      );
    }
  }

  return (
    <StepperContainer>
      <nav>
        {arrayOfSteps.map(({ id, label }) => {
          return (
            <StyledList key={id}>
              <SingleStepContainer>
                <StepItem
                  key={id}
                  label={label}
                  name={id}
                  id={id}
                  currentStep={currentStep}
                  onStepChange={() => onStepChange(id)}
                  clickedSteps={clickedSteps}
                />
              </SingleStepContainer>

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
                  <Button $variant="back" onClick={onBack}>
                    Back
                  </Button>
                ) : null}
                {currentStep === id && (
                  <Button
                    $variant="next"
                    onClick={onNext}
                    disabled={handleDisabledButton()}
                  >
                    {currentStep === arrayOfSteps.length ? "Plot" : "Next"}
                  </Button>
                )}
              </ButtonContainer>
            </StyledList>
          );
        })}
      </nav>
    </StepperContainer>
  );
}