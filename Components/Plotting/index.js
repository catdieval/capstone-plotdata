import Paragraph from "../Paragraph";
import { chartArray } from "../../lib/listOfPlotTypes";
import dynamic from "next/dynamic";
import { Card } from "../Card/card.styled";
const Plot = dynamic(() => import("react-plotly.js"), { ssr: false });

export default function Plotting({ clickedChartType }) {
  const XVariable = [1, 2, 3, 4, 6, 8, 10, 12, 14, 16, 18, 20];
  const YVariable = [32, 37, 40.5, 43, 49, 54, 59, 63.5, 69.5, 73, 74, null];
  const match = chartArray.findIndex(
    (chart) => chart.name === clickedChartType
  );

  if (match != -1) {
    var selectedMode = chartArray[match].mode;
    var selectedType = chartArray[match].type;
  }

  return (
    <>
      {match != -1 ? (
        <>
          <Paragraph>
            You can interact with the graph by using the functions at the top of
            the graph.
          </Paragraph>
          <Card $variant="graph">
            <Plot
              data={[
                {
                  x: xVariable,
                  y: yVariable,
                  mode: selectedMode,
                  type: selectedType,
                },
              ]}
              layout={{
                xaxis: {
                  title: { text: xLabel },
                  showline: true,
                  ticks: "outside",
                },
                yaxis: {
                  title: { text: yLabel },
                  ticks: "outside",
                },
                width: 600,
                height: 500,
              }}
              config={{
                displayModeBar: true,
                modeBarButtonsToRemove: ["lasso2d", "select2d", "pan2d"],
              }}
            />
          </Card>
        </>
      ) : null}
    </>
  );
}
