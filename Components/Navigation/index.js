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
