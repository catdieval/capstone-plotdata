import UploadData from "../Components/UploadData";
import ListOfCharts from "../Components/ListOfCharts";
import Plotting from "@/Components/Plotting";

export default function HomePage() {
  return (
    <div>
      <UploadData />
      <ListOfCharts />
      <Plotting />
    </div>
  );
}
