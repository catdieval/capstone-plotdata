import UploadData from "../Components/UploadData";
import ListOfCharts from "../Components/ListOfCharts";
import Plotting from "../Components/Plotting";
import XandYLabelsGraph from "../Components/XandYLabelsGraph";

export default function HomePage({ clickedChartType, onSelectChartType }) {
  return (
    <div>
      <UploadData />
      <ListOfCharts onSelectChartType={onSelectChartType} />
      <XandYLabelsGraph />
      <Plotting clickedChartType={clickedChartType} />
    </div>
  );
}
