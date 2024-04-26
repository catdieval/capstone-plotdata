import StepItem from "../StepItem";
import Button from "../Button";
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
              <Button onClick={onBackChange}>Back</Button>

              <Button onClick={onNextChange}>Next</Button>
            </>
          );
        })}
      </nav>
    </>
  );
}
