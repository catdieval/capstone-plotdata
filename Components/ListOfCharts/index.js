import Heading from "../Heading";
import { FlexContainer } from "../FlexContainer";
import ChartItem from "../ChartItem";
import { chartarray } from "@/lib/listofcharttypes";

export default function ListOfCharts() {
  return (
    <>
      <Heading>Step 2: Select the type of chart</Heading>
      <FlexContainer $direction="row">
        {chartarray.map((chart) => {
          return <ChartItem key={chart.name} name={chart.name} />;
        })}
      </FlexContainer>
    </>
  );
}
