import Paragraph from "../Paragraph";
import { chartArray } from "../../lib/listOfPlotTypes";
import dynamic from "next/dynamic";
import Container from "../Container";
const Plot = dynamic(() => import("react-plotly.js"), { ssr: false });

export default function Plotting({
  clickedChartType,
  xVariable,
  yVariable,
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
            color:
              settings.markerColor === "lilac"
                ? "#c8a2c8"
                : settings.markerColor === "dark yellow"
                ? "#EDED00"
                : settings.markerColor === "light brown"
                ? "#B5651D"
                : settings.markerColor,
            symbol: settings.markerSymbol,
            size: settings.markerSize,
          }
        : {
            color:
              settings.barColor === "lilac"
                ? "#c8a2c8"
                : settings.barColor === "dark yellow"
                ? "#EDED00"
                : settings.barColor === "light brown"
                ? "#B5651D"
                : settings.barColor,
          },
    line:
      clickedChartType === "line-plot"
        ? {
            color:
              settings.lineColor === "lilac"
                ? "#c8a2c8"
                : settings.lineColor === "dark yellow"
                ? "#EDED00"
                : settings.lineColor === "light brown"
                ? "#B5651D"
                : settings.lineColor,
            dash: settings.lineStyle,
            width: settings.lineWidth,
          }
        : "",
  };

  const xAxisOptions = {
    title: { text: settings.xLabel },
    showline: true,
    zeroline: false,
    ticks: "outside",
    showgrid: settings.gridXAxis === "true",
    griddash: settings.gridLineStyleXAxis,
    gridcolor: "darkgrey",
    autorange:
      settings.rangeXAxis === "reversed"
        ? "reversed"
        : settings.rangeXAxis === "true"
        ? true
        : settings.rangeXAxis === "min max"
        ? false
        : null,
    range:
      settings.rangeXAxis === "min max" && settings.logXAxis === "linear"
        ? [settings.minXAxis, settings.maxXAxis]
        : settings.rangeXAxis === "min max" && settings.logXAxis === "log"
        ? [Math.log10(settings.minXAxis), Math.log10(settings.maxXAxis)]
        : null,

    type: settings.logXAxis,
  };

  const yAxisOptions = {
    title: { text: settings.yLabel },
    showline: true,
    zeroline: false,
    ticks: "outside",
    showgrid: settings.gridYAxis === "true",
    griddash: settings.gridLineStyleYAxis,
    gridcolor: "darkgrey",
    autorange:
      settings.rangeYAxis === "reversed"
        ? "reversed"
        : settings.rangeYAxis === "true"
        ? true 
        : settings.rangeYAxis === "min max"
        ? false
        : null,
    range:
      settings.rangeYAxis === "min max" && settings.logYAxis === "linear"
        ? [settings.minYAxis, settings.maxYAxis]
        : settings.rangeYAxis === "min max" && settings.logYAxis === "log"
        ? [Math.log10(settings.minYAxis), Math.log10(settings.maxYAxis)]
        : null,
    type: settings.logYAxis,
  };

  return (
    <>
      {chartIndex != -1 ? (
        <>
          <Paragraph>
            You can interact with the chart by using the functions at the top of
            the chart.
          </Paragraph>
          <Container $centered="center" $margin_top $margin_bottom>
            <Plot
              data={[dataOptions]}
              layout={{
                title: {
                  text: settings.titleLabel,
                  y: 0.9, 
                },
                xaxis: xAxisOptions,
                yaxis: yAxisOptions,
                width: 500,
                height: 400, 
                margin: {
                  t: 50,
                  b: 50,
                  r: 50,
                  l: 50,
                },
              }}
              config={{
                displayModeBar: true,
                modeBarButtonsToRemove: ["lasso2d", "select2d", "pan2d"],
              }}
            />
          </Container>
        </>
      ) : null}
    </>
  );
}
