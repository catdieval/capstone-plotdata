import Plotting from "../Components/Plotting";
import Container from "../Components/Container";
import Button from "../Components/Button";
import { useRouter } from "next/router";

export default function Plot({
  xVariable,
  yVariable,
  hasCompletedAllSteps,
  settings,
  onSettingsChange,
  clickedChartType,
}) {
  const router = useRouter();

  // This function serves to redirect the user to the page with the steps
  function handleBackSteps() {
    router.push("/steps");
  }

  return (
    <>
      <Plotting
        clickedChartType={clickedChartType}
        xVariable={xVariable}
        yVariable={yVariable}
        settings={settings}
        hasCompletedAllSteps={hasCompletedAllSteps}
        onSettingsChange={onSettingsChange}
      />
      <Container $centered="center" $margin>
        <Button onClick={handleBackSteps} $variant="back">
          Back
        </Button>
      </Container>
    </>
  );
}
