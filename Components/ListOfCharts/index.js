import Heading from "../Heading";
import { Container } from "../Container";
import ChartItem from "../ChartItem";
import { chartArray } from "../../lib/listOfPlotTypes";

export default function ListOfCharts({ onSelectChartType }) {
  return (
    <>
      <Heading>Step 2: Select the type of chart</Heading>
      <Container $wrap="wrap">
        {chartArray.map((chart) => {
          return (
            <ChartItem
              key={chart.name}
              icon={chart.icon}
              name={chart.name}
              onSelectChartType={onSelectChartType}
            />
          );
        })}
      </Container>
    </>
  );
}
