import Heading from "../Heading";
import { Container } from "../Container";
import ChartItem from "../ChartItem";
import { chartArray } from "../../lib/listOfPlotTypes";

export default function ListOfCharts({
  onSelectChartType,
  keynames,
  clickedChartType,
}) {
  return (
    <>
      {keynames.length > 0 && (
        <>
          <Heading>Step 2: Select the type of chart</Heading>
          <Container $wrap="wrap">
            {chartArray.map(({ name, icon }) => {
              return (
                <ChartItem
                  key={name}
                  icon={icon}
                  name={name}
                  clickedChartType={clickedChartType}
                  onSelectChartType={() => onSelectChartType({ name })}
                />
              );
            })}
          </Container>
        </>
      )}
    </>
  );
}
