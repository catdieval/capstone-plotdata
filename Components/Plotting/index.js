import Paragraph from "../Paragraph";
import { chartArray } from "../../lib/listOfPlotTypes";
import dynamic from "next/dynamic";
import { Card } from "../Card/card.styled";
const Plot = dynamic(() => import("react-plotly.js"), { ssr: false });

export default function Plotting({
  clickedChartType,
  xVariable,
  yVariable,
  xLabel,
  yLabel,
  hasCompletedStep4,
  titleLabel,
  hasCompletedStep5,
  markerColor,
  markerSymbol,
  markerSize,
}) {
  const match = chartArray.findIndex(
    (chart) => chart.name === clickedChartType
  );

  let selectedMode, selectedType;

  if (match != -1) {
    selectedMode = chartArray[match].mode;
    selectedType = chartArray[match].type;
  }

  /*
  if (match != -1) {
    var selectedMode = chartArray[match].mode;
    var selectedType = chartArray[match].type;
  }
*/
  const dataOptions = {
    x: xVariable,
    y: yVariable,
    mode: selectedMode,
    type: selectedType,
    marker:
      clickedChartType === "line-markers-plot" ||
      clickedChartType === "scatter-plot"
        ? {
            color: markerColor,
            symbol: markerSymbol,
            size: markerSize,
          }
        : null,
  };

  return (
    <>
      {match != -1 &&
      xVariable.length > 0 &&
      yVariable.length > 0 &&
      hasCompletedStep4 === true &&
      hasCompletedStep5 === true &&
      markerColor !== "" &&
      markerSymbol !== "" &&
      markerSize !== 0 ? (
        <>
          <Paragraph>
            You can interact with the graph by using the functions at the top of
            the graph.
          </Paragraph>
          <Card $variant="graph">
            {clickedChartType === "scatter-plot" ||
            clickedChartType === "line-markers-plot" ? (
              <Plot
                data={[dataOptions]}
                layout={{
                  title: { text: titleLabel },
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
            ) : (
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
                  title: { text: titleLabel },
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
            )}
          </Card>
        </>
      ) : null}
    </>
  );
}
