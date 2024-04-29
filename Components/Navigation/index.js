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
  onHasCompletedStep4,
  hasCompletedStep4,
  onHasCompletedStep5,
  hasCompletedStep5,
  onHasCompletedDistProp,
  hasCompletedDistProp,
  onHasCompletedStep6,
  settings,
  onSettingsChange,
}) {
  console.log(currentStep);
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
                onHasCompletedStep4={onHasCompletedStep4}
                hasCompletedStep4={hasCompletedStep4}
                onHasCompletedStep5={onHasCompletedStep5}
                hasCompletedStep5={hasCompletedStep5}
                onHasCompletedDistProp={onHasCompletedDistProp}
                hasCompletedDistProp={hasCompletedDistProp}
                onHasCompletedStep6={onHasCompletedStep6}
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
                  <Button $variant="next" onClick={onNextChange}>
                    {currentStep === arrayOfSteps.length ? "Finish" : "Next"}
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