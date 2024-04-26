import Navigation from "@/Components/Navigation";

export default function AllSteps({
  onBackChange,
  onNextChange,
  onStepChange,
  currentStep,
}) {
  return (
    <>
      <Navigation
        onNextChange={onNextChange}
        onBackChange={onBackChange}
        onStepChange={onStepChange}
        currentStep={currentStep}
      />
    </>
  );
}
