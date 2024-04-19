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

  // function rangeOptionsX() {
  //   if (settings.gridXAxis === "true") {
  //     const rangeOptionsX = { autorange: true };
  //     return rangeOptionsX;
  //   } else if (settings.rangeXAxis === "reversed") {
  //     const rangeOptionsX = { autorange: "reversed" };
  //     return rangeOptionsX;
  //   } else if (settings.rangeXAxis === "min max") {
  //     const rangeOptionsX = {
  //       autorange: false,
  //       range: [settings.minXAxis, settings.maxXAxis],
  //     };
  //     return rangeOptionsX;
  //   }
  // }
  // function rangeOptionsY() {
  //   if (settings.gridYAxis === "true") {
  //     const rangeOptionsY = { autorange: true };
  //     return rangeOptionsY;
  //   } else if (settings.rangeYAxis === "reversed") {
  //     const rangeOptionsY = { autorange: "reversed" };
  //     return rangeOptionsY;
  //   } else if (settings.rangeYAxis === "min max") {
  //     const rangeOptionsY = {
  //       autorange: false,
  //       range: [settings.minYAxis, settings.maxYAxis],
  //     };
  //     return rangeOptionsY;
  //   }
  // }

  const rangeOptionsX =
    settings.rangeXAxis === "true"
      ? { autorange: true }
      : settings.rangeXAxis === "reversed"
      ? { autorange: "reversed" }
      : settings.rangeXAxis === "min max"
      ? { autorange: false, range: [settings.minXAxis, settings.maxXAxis] }
      : "";

  const rangeOptionsY =
    settings.rangeYAxis === "true"
      ? { autorange: true }
      : settings.rangeYAxis === "reversed"
      ? { autorange: "reversed" }
      : settings.rangeYAxis === "min max"
      ? { autorange: false, range: [settings.minYAxis, settings.maxYAxis] }
      : "";

  // console.log(rangeOptionsX, rangeOptionsY);

  // const layoutOptionsY = {
  //   autorange: settings.rangeYAxis === "true" ? true : false,
  //   range:
  //     [settings.minYAxis, settings.maxYAxis] ||
  //     settings.rangeYAxis === "reversed"
  //       ? "reversed"
  //       : "",
  // };

  // function rangeX() {
  //   if (settings.rangeXAxis === "true") {
  //     rangeXAxis === true;
  //   } else if (settings.rangeXAxis === "reversed") {
  //     rangeXAxis === "reversed";
  //   } else if (settings.rangeXAxis === "min max") {
  //     rangeXAxis === false;
  //   }
  //   return rangeXAxis;
  // }

  // rangeXAxis();

  // if (settings.rangeYAxis === "true") {
  //   rangeYAxis === true;
  // } else if (settings.rangeYAxis === "reversed") {
  //   rangeYAxis === "reversed";
  // } else if (settings.rangeYAxis === "min max") {
  //   rangeYAxis === false;
  // }

  // console.log(rangeXAxis, rangeYAxis);
  console.log(settings);

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
                  showgrid: settings.gridXAxis === "true",
                  griddash: settings.gridLineStyleXAxis,
                  autorange:
                    settings.rangeXAxis === "true"
                      ? true
                      : settings.rangeXAxis === "reversed"
                      ? "reversed"
                      : settings.rangeXAxis === "min max"
                      ? false
                      : "",
                  range: [settings.minXAxis, settings.maxXAxis],
                  type: settings.logXAxis,
                },
                yaxis: {
                  title: { text: settings.yLabel },
                  ticks: "outside",
                  showgrid: settings.gridYAxis === "true",
                  griddash: settings.gridLineStyleYAxis,
                  autorange:
                    settings.rangeYAxis === "true"
                      ? true
                      : settings.rangeYAxis === "reversed"
                      ? "reversed"
                      : settings.rangeYAxis === "min max"
                      ? false
                      : "",
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
