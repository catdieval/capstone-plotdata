import GridProperties from "../GridProperties";
import { StyledH3 } from "../Heading";
import LogScaleProperties from "../LogScaleProperties";
import RangeProperties from "../RangeProperties";
import Container from "../Container";
import InputTypeSubmit from "../InputTypeSubmit";
import {ButtonContainer} from "../Navigation/styledNavigation";
import Button from "../Button";

export default function LayoutProperties({ 
  onDisableNextButton, 
  onNext, 
  onBack, 
  settings, 
  onSettingsChange, 
}) {
  function handleSubmit(event) {
    event.preventDefault();
  }

  return (
    <>
      <Container $centered="center" $margin>
        <StyledH3>Layout</StyledH3>
        <form onSubmit={handleSubmit}>
          <GridProperties
            settings={settings}
            onSettingsChange={onSettingsChange}
          />
          <RangeProperties
            settings={settings}
            onSettingsChange={onSettingsChange}
          />
          <LogScaleProperties
            settings={settings}
            onSettingsChange={onSettingsChange}
          />
          <ButtonContainer>
            <Button $variant="back" onClick={onBack}>
              Back
            </Button>
            <InputTypeSubmit
              valueString="Finish"
              onClick={onNext}
              disabled={onDisableNextButton}
            />  
          </ButtonContainer>
        </form>
      </Container>
    </>
  );
}
