import StepItem from "../StepItem";
import Button from "../Button";
import OneStepAtATime from "../OneStepAtATime";
import {
  ButtonContainer,
  StepperContainer,
  StyledList,
  SingleStepContainer,
  StyledNav
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

  const hasNotEnteredMarkerProperties = (!settings.markerColor || !settings.markerSymbol || !settings.markerSize);
  const hasNotEnteredLineProperties = (!settings.lineColor || !settings.lineStyle || !settings.lineWidth);

  const hasNotEnteredInputsStep6 = (
    ((clickedChartType === "bar-plot" && !settings.barColor) || 
     (clickedChartType === "scatter-plot" && hasNotEnteredMarkerProperties) ||
     (clickedChartType === "line-plot" && hasNotEnteredLineProperties) || 
     (clickedChartType === "line-markers-plot" && (hasNotEnteredLineProperties || hasNotEnteredMarkerProperties))) ||
    (!settings.gridXAxis || (settings.gridXAxis === "true" && !settings.gridLineStyleXAxis)) || 
    (!settings.gridYAxis || (settings.gridYAxis === "true" && !settings.gridLineStyleYAxis)) ||
    (!settings.rangeXAxis || (settings.rangeXAxis === "min max" && (!settings.minXAxis || !settings.maxXAxis))) || 
    (!settings.rangeYAxis || (settings.rangeYAxis === "min max" && (!settings.minYAxis || !settings.maxYAxis))) ||
    !settings.logXAxis ||
    !settings.logYAxis
  );

  const hasForgottenInputForReplotting = (
    ((clickedChartType === "bar-plot" && !settings.barColor) || 
    (clickedChartType === "scatter-plot" && hasNotEnteredMarkerProperties) ||
    (clickedChartType === "line-plot" && hasNotEnteredLineProperties) || 
    (clickedChartType === "line-markers-plot" && (hasNotEnteredLineProperties || hasNotEnteredMarkerProperties))) ||
    (settings.gridXAxis === "true" && !settings.gridLineStyleXAxis) || 
    (settings.gridYAxis === "true" && !settings.gridLineStyleYAxis) ||
    (settings.rangeXAxis === "min max" && (!settings.minXAxis || !settings.maxXAxis)) || 
    (settings.rangeYAxis === "min max" && (!settings.minYAxis || !settings.maxYAxis)) 
  );

  /* This function serves to disable the "Next" button if the user has not made all inputs for the
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
      return hasNotEnteredInputsStep6;
    }
  } 

  function handleDisablePlotButton() {
    return hasForgottenInputForReplotting;
  }

  return (
    <StepperContainer>
      <StyledNav>
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
                onDisableNextButton={handleDisableNextButton()}
                onNext={onNext}
                onBack={onBack}
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
            </StyledList>
          );
        })}
        <ButtonContainer>
          { /* The "Plot" button is displayed only if the user has clicked the "Next" button 
            for step 6 */
          clickedSteps.includes(idStep6) && (
            <Button $variant="plot" onClick={handlePlotNavigation} disabled={handleDisablePlotButton()}>Plot</Button>
          )}
        </ButtonContainer>
      </StyledNav>
    </StepperContainer>
  );
}
