import GridProperties from "../GridProperties";
import { StyledH3 } from "../Heading";
import LogScaleProperties from "../LogScaleProperties";
import RangeProperties from "../RangeProperties";
import Container from "../Container";

export default function LayoutProperties({ 
  settings, 
  onSettingsChange, 
}) {

  return (
    <>
      <Container $centered="center" $margin>
        <StyledH3>Layout</StyledH3>
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
      </Container>
    </>
  );
}
