import Paragraph from "../Paragraph";
import CenteredDiv from "../CenteredDiv";
import { chartArray } from "@/lib/listOfPlotTypes";
import dynamic from "next/dynamic";
const Plot = dynamic(() => import("react-plotly.js"), { ssr: false });
import useLocalStorageState from "use-local-storage-state";

export default function Plotting() {
  const clickedChartTypeData = "bar-plot";
  const XVariable = [1, 2, 3, 4, 6, 8, 10, 12, 14, 16, 18, 20];
  const YVariable = [32, 37, 40.5, 43, 49, 54, 59, 63.5, 69.5, 73, 74, null];
  const match = chartArray.findIndex(
    (chart) => chart.name === clickedChartTypeData
  );
  console.log(clickedChartTypeData);
  const selectedMode = chartArray[match].mode;
  const selectedType = chartArray[match].type;

  return (
    <>
      <Paragraph>
        You can interact with the graph by using the functions at the top of the
        graph.
      </Paragraph>
      <CenteredDiv>
        <Plot
          data={[
            {
              x: XVariable,
              y: YVariable,
              mode: selectedMode,
              type: selectedType,
            },
          ]}
          layout={{
            xaxis: {
              showline: true,
              ticks: "outside",
            },
            yaxis: {
              showline: true,
              ticks: "outside",
            },
            width: 600,
            height: 500,
          }}
        ></Plot>
      </CenteredDiv>
    </>
  );
}
