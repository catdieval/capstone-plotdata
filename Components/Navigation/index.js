import StepItem from "../StepItem";
import { arrayOfSteps } from "../../lib/arrayOfSteps";

export default function Navigation() {
  return (
    <>
      <nav>
        {arrayOfSteps.map(({ id, label }) => {
          return (
            <>
              <StepItem key={id} label={label} name={id} />
            </>
          );
        })}
      </nav>
    </>
  );
}
