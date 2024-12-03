import StepItem from "../StepItem";
import Button from "../Button";
import AllSteps from "../AllSteps";
import {
  ButtonContainer,
  StepperContainer,
  StyledList,
  SingleStepContainer,
} from "./styledNavigation";
import { arrayOfSteps } from "../../lib/arrayOfSteps";
import { useRouter } from "next/router";

export default function Navigation({
  onNext,
  onBack,
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

  //Destructuring id from arrayOfSteps corresponding to step 6.
  const { id } = arrayOfSteps[5];

  function handlePlotNavigation() {
    router.push("/plot");
  }

  function handleBackStartPage() {
    router.push("/");
  }

  function handleDisabledButton() {
    if (currentStep === 1) {
      return !fileObject;
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
        <ButtonContainer>
          <Button $variant="back" onClick={handleBackStartPage}>
            Home
          </Button>
        </ButtonContainer>
        {arrayOfSteps.map(({ id, label }) => {
          return (
            <StyledList key={id}>
              <SingleStepContainer>
                <StepItem
                  key={id}
                  label={label}
                  buttonNumber={id}
                  id={id}
                  currentStep={currentStep}
                  onStepChange={() => onStepChange(id)}
                  clickedSteps={clickedSteps}
                />
              </SingleStepContainer>
              <AllSteps
                currentStep={currentStep}
                id={id}
                keynames={keynames}
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
              />
              <ButtonContainer>
                {
                  //The currentStep > 1 && currentStep === id condition is used to show the "Back" button only when the user has reached Step 2 to Step 6 and when currentStep === id.
                }
                {currentStep > 1 && currentStep === id ? (
                  <Button $variant="back" onClick={onBack}>
                    Back
                  </Button>
                ) : null}
                {
                  // The currentStep === id condition is used to show the "Next" button only when the condition is true.
                }
                {currentStep === id && (
                  <Button
                    $variant="next"
                    onClick={onNext}
                    disabled={handleDisabledButton()}
                  >
                    {currentStep === arrayOfSteps.length ? "Finish" : "Next"}
                  </Button>
                )}
              </ButtonContainer>
            </StyledList>
          );
        })}
        <ButtonContainer>
          {clickedSteps.includes(id) && (
            <Button onClick={handlePlotNavigation}>Plot</Button>
          )}
        </ButtonContainer>
      </nav>
    </StepperContainer>
  );
}
