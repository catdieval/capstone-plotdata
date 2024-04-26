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
                <Button $variant="back" onClick={onBackChange}>
                  Back
                </Button>
                <Button $variant="next" onClick={onNextChange}>
                  Next
                </Button>
              </ButtonContainer>
            </>
          );
        })}
      </nav>
    </>
  );
}
