import Container from "../Container";
import ChartItem from "../ChartItem";
import { chartArray } from "../../lib/listOfPlotTypes";
import InputTypeSubmit from "../InputTypeSubmit";
import {ButtonContainer} from "../Navigation/styledNavigation";
import Button from "../Button";

export default function ListOfCharts({ 
  onDisableNextButton, 
  onNext, 
  onBack, 
  onSelectChartType, 
  clickedChartType, 
}) {
  function handleSubmit(event) {
    event.preventDefault();
  }

  return (
    <>
    <form onSubmit={handleSubmit}>
    <Container $wrap="wrap">
      {chartArray.map(({ name, icon }) => {
        return (
          <ChartItem
            key={name}
            icon={icon}
            name={name}
            clickedChartType={clickedChartType}
            onSelectChartType={() => onSelectChartType(name)}
          />
        );
      })}
    </Container>
    <ButtonContainer>
      <Button $variant="back" onClick={onBack}>
        Back
      </Button>
      <InputTypeSubmit
        valueString="Next"
        onClick={onNext}
        disabled={onDisableNextButton}
      />  
    </ButtonContainer>
    </form>
    </>
  );
}
