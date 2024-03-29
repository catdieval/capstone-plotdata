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
  titleLabel,
  barColor,
}) {
  const match = chartArray.findIndex(
    (chart) => chart.name === clickedChartType
  );

  if (match != -1) {
    var selectedMode = chartArray[match].mode;
    var selectedType = chartArray[match].type;
  }

  if (clickedChartType === "bar-plot") {
    var dataOptions = {
      x: xVariable,
      y: yVariable,
      mode: selectedMode,
      type: selectedType,
      marker: { color: barColor },
    };
  }

  return (
    <>
      {match != -1 &&
      xVariable.length > 0 &&
      yVariable.length > 0 &&
      xLabel != "" &&
      yLabel != "" &&
      titleLabel != "" &&
      barColor != "" ? (
        <>
          <Paragraph>
            You can interact with the graph by using the functions at the top of
            the graph.
          </Paragraph>
          <Card $variant="graph">
            {clickedChartType === "bar-plot" ? (
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
