import Heading from "../Heading";
import { Container } from "../Container";
import ChartItem from "../ChartItem";
import { chartArray } from "../../lib/listOfPlotTypes";

export default function ListOfCharts({ onSelectChartType, keynames }) {
  return (
    <>
      {keynames.length > 0 && (
        <>
          <Heading>Step 2: Select the type of chart</Heading>
          <Container $grid="grid">
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
      )}
    </>
  );
}
