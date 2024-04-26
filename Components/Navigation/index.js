import StepItem from "../StepItem";
import Button from "../Button";
import { ButtonContainer } from "./styledNavigation";
import { arrayOfSteps } from "../../lib/arrayOfSteps";

export default function Navigation({
  onNextChange,
  onBackChange,
  currentStep,
}) {
  console.log(currentStep);
  return (
    <>
      <nav>
        {arrayOfSteps.map(({ id, label }) => {
          return (
            <>
              <StepItem key={id} label={label} name={id} />
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
    </>
  );
}
