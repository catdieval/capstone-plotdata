import UploadData from "../Components/UploadData";
import ListOfCharts from "../Components/ListOfCharts";
import Plotting from "../Components/Plotting";

export default function HomePage({ clickedChartType, onSelectChartType }) {
  return (
    <div>
      <UploadData />
      <ListOfCharts onSelectChartType={onSelectChartType} />
      <Plotting clickedChartType={clickedChartType} />
    </div>
  );
}
