import UploadData from "../Components/UploadData";
import ListOfCharts from "../Components/ListOfCharts";
import Plotting from "../Components/Plotting";
import XandYLabelsGraph from "../Components/XandYLabelsGraph";

export default function HomePage({
  clickedChartType,
  onSelectChartType,
  handleXLabelChange,
  handleYLabelChange,
  hasEnteredYLabel,
  XLabel,
  YLabel,
}) {
  return (
    <div>
      <UploadData />
      <ListOfCharts onSelectChartType={onSelectChartType} />
      <XandYLabelsGraph
        handleXLabelChange={handleXLabelChange}
        handleYLabelChange={handleYLabelChange}
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
