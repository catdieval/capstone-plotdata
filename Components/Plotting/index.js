import Paragraph from "../Paragraph";
import CenteredDiv from "../CenteredDiv";
import { chartArray } from "../../lib/listOfPlotTypes";
import dynamic from "next/dynamic";
const Plot = dynamic(() => import("react-plotly.js"), { ssr: false });

export default function Plotting({ clickedChartType, xVariable, yVariable }) {
  const match = chartArray.findIndex(
    (chart) => chart.name === clickedChartType
  );

  if (match != -1) {
    var selectedMode = chartArray[match].mode;
    var selectedType = chartArray[match].type;
  }

  return (
    <>
      {match != -1 && xVariable.length > 0 && yVariable.length > 0 ? (
        <>
          <Paragraph>
            You can interact with the graph by using the functions at the top of
            the graph.
          </Paragraph>
          <CenteredDiv>
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
                  showline: true,
                  ticks: "outside",
                },
                yaxis: {
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
          </CenteredDiv>
        </>
      ) : null}
    </>
  );
}
