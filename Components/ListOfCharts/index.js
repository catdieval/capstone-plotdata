import Container from "../Container";
import ChartItem from "../ChartItem";
import { chartArray } from "../../lib/listOfPlotTypes";

export default function ListOfCharts({ onSelectChartType, clickedChartType }) {
  return (
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
  );
}
