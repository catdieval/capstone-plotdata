import Paragraph from "../Paragraph";
import { chartArray } from "../../lib/listOfPlotTypes";
import dynamic from "next/dynamic";
import { Card } from "../Card/card.styled";
const Plot = dynamic(() => import("react-plotly.js"), { ssr: false });

export default function Plotting({
  clickedChartType,
  xVariable,
  yVariable,
  hasCompletedStep4,
  hasCompletedStep5,
  settings,
}) {
  const chartIndex = chartArray.findIndex(
    (chart) => chart.name === clickedChartType
  );

  let selectedMode, selectedType;

  if (chartIndex != -1) {
    selectedMode = chartArray[chartIndex].mode;
    selectedType = chartArray[chartIndex].type;
  }

  const dataOptions = {
    x: xVariable,
    y: yVariable,
    mode: selectedMode,
    type: selectedType,
    marker:
      clickedChartType === "line-markers-plot" ||
      clickedChartType === "scatter-plot"
        ? {
            color: settings.markerColor,
            symbol: settings.markerSymbol,
            size: settings.markerSize,
          }
        : { color: settings.barColor },
    line:
      clickedChartType === "line-plot"
        ? {
            color: settings.lineColor,
            dash: settings.lineStyle,
            width: settings.lineWidth,
          }
        : "",
  };

  return (
    <>
      {chartIndex != -1 &&
      xVariable.length > 0 &&
      yVariable.length > 0 &&
      hasCompletedStep4 === true &&
      hasCompletedStep5 === true &&
      (settings.barColor != "" ||
        (settings.lineColor != "" &&
          settings.lineStyle != "" &&
          settings.lineWidth !== 0) ||
        (settings.markerColor !== "" &&
          settings.markerSymbol !== "" &&
          settings.markerSize !== 0)) &&
      settings.gridXAxis != "" &&
      settings.gridYAxis != "" &&
      settings.rangeXAxis != "" &&
      settings.rangeYAxis != "" &&
      settings.logXAxis != "" &&
      settings.logYAxis != "" ? (
        <>
          <Paragraph>
            You can interact with the graph by using the functions at the top of
            the graph.
          </Paragraph>
          <Card $variant="graph">
            <Plot
              data={[dataOptions]}
              layout={{
                title: { text: settings.titleLabel },
                xaxis: {
                  title: { text: settings.xLabel },
                  showline: true,
                  ticks: "outside",
                  showgrid: settings.gridXAxis,
                  griddash: settings.gridLineStyleXAxis,
                  autorange: settings.rangeXAxis,
                  range: [settings.minXAxis, settings.maxXAxis],
                  type: settings.logXAxis,
                },
                yaxis: {
                  title: { text: settings.yLabel },
                  title: { text: settings.yLabel },
                  showline: true,
                  ticks: "outside",
                  showgrid: settings.gridYAxis,
                  griddash: settings.gridLineStyleYAxis,
                  autorange: settings.rangeYAxis,
                  range: [settings.minYAxis, settings.maxYAxis],
                  type: settings.logYAxis,
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
