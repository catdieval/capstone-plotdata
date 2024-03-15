import UploadData from "../Components/UploadData";
import ListOfCharts from "../Components/ListOfCharts";
import Plotting from "../Components/Plotting";
import XandYLabelsGraph from "../Components/XandYLabelsGraph";

export default function HomePage({
  clickedChartType,
  onSelectChartType,
  onXLabelChange,
  onYLabelChange,
  hasEnteredYLabel,
  XLabel,
  YLabel,
}) {
  return (
    <div>
      <UploadData />
      <ListOfCharts onSelectChartType={onSelectChartType} />
      <XandYLabelsGraph
        onXLabelChange={onXLabelChange}
        onYLabelChange={onYLabelChange}
        hasEnteredYLabel={hasEnteredYLabel}
      />
      <Plotting
        clickedChartType={clickedChartType}
        XLabel={XLabel}
        YLabel={YLabel}
      />
    </div>
  );
}
