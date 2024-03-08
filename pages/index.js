import UploadData from "../Components/UploadData";
import ListOfCharts from "../Components/ListOfCharts";
import Plotting from "../Components/Plotting";

export default function HomePage({ clickedChartType, handleChartType }) {
  return (
    <div>
      <UploadData />
      <ListOfCharts handleChartType={handleChartType} />
      <Plotting clickedChartType={clickedChartType} />
    </div>
  );
}
