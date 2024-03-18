import UploadData from "../Components/UploadData";
import ListOfCharts from "../Components/ListOfCharts";
import Plotting from "../Components/Plotting";
import XandYLabelsGraph from "../Components/XandYLabelsGraph";

export default function HomePage({
  clickedChartType,
  onSelectChartType,
  onXLabelChange,
  onYLabelChange,
  xLabel,
  yLabel,
}) {
  return (
    <div>
      <UploadData />
      <ListOfCharts onSelectChartType={onSelectChartType} />
      <XandYLabelsGraph
        onXLabelChange={onXLabelChange}
        onYLabelChange={onYLabelChange}
        xLabel={xLabel}
        yLabel={yLabel}
      />
      <Plotting
        clickedChartType={clickedChartType}
        xLabel={xLabel}
        yLabel={yLabel}
      />
    </div>
  );
}
