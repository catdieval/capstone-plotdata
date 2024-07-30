import StepItem from "../StepItem";
import Button from "../Button";
import OneStepAtATime from "../OneStepAtATime";
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
  onClickStepper,
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

  // Destructuring id from arrayOfSteps corresponding to step 6.
  const { id } = arrayOfSteps[5];
  const idStep6 = id;

  // This function redirects the user to the page with the chart
  function handlePlotNavigation() {
    router.push("/plot");
  }

  // This function redirects the user to the startpage
  function handleBackStartPage() {
    router.push("/");
  }

  /* This function serves to disable the "Next" button if the user has not made any input for the
  current step */
  function handleDisableNextButton() {
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
                  onClickStepper={() => onClickStepper(id)}
                  clickedSteps={clickedSteps}
                />
              </SingleStepContainer>
              <OneStepAtATime
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
                  /* This condition is used to display the "Back" button only for the current step and only 
                  when this step is not step 1 */
                }
                {currentStep > 1 && currentStep === id ? (
                  <Button $variant="back" onClick={onBack}>
                    Back
                  </Button>
                ) : null}
                {
                  // This condition is used to display the "Next" button only for the current step
                }
                {currentStep === id && (
                  <Button
                    $variant="next"
                    onClick={onNext}
                    disabled={handleDisableNextButton()}
                  >
                    {currentStep === arrayOfSteps.length ? "Finish" : "Next"}
                  </Button>
                )}
              </ButtonContainer>
            </StyledList>
          );
        })}
        <ButtonContainer>
          { /* The "Plot" button is displayed only if the user has clicked the "Next" button 
            for step 6 */
          clickedSteps.includes(idStep6) && (
            <Button onClick={handlePlotNavigation}>Plot</Button>
          )}
        </ButtonContainer>
      </nav>
    </StepperContainer>
  );
}
