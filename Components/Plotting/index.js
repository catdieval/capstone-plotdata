import Paragraph from "../Paragraph";
import { chartArray } from "../../lib/listOfPlotTypes";
import dynamic from "next/dynamic";
import Container from "../Container";
//import { Card } from "../Card/card.styled";
const Plot = dynamic(() => import("react-plotly.js"), { ssr: false });

export default function Plotting({
  typeOfScreen,
  clickedChartType,
  xVariable,
  yVariable,
  hasCompletedStep4,
  hasCompletedStep5,
  hasCompletedStep6,
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
      {chartIndex != -1 &&
      xVariable.length > 0 &&
      yVariable.length > 0 &&
      hasCompletedStep4 &&
      hasCompletedStep5 &&
      hasCompletedStep6 ? (
        <>
          <Paragraph>
            You can interact with the graph by using the functions at the top of
            the chart.
          </Paragraph>
          <Container $centered="center" $marginTop $marginBottom>
            <Plot
              data={[dataOptions]}
              layout={{
                title: {
                  text: settings.titleLabel,
                  y: typeOfScreen === "Mobile"
                  ? 0.9
                  : typeOfScreen === "Desktop"
                  ? 0.95
                  : null, 
                },
                xaxis: xAxisOptions,
                yaxis: yAxisOptions,
                width:
                  typeOfScreen === "Mobile"
                    ? 350
                    : typeOfScreen === "Desktop"
                    ? 500
                    : null,
                height:
                  typeOfScreen === "Mobile"
                    ? 250
                    : typeOfScreen === "Desktop"
                    ? 400
                    : null,
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
