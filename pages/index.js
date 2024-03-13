import UploadData from "../Components/UploadData";
import ListOfCharts from "../Components/ListOfCharts";
import Plotting from "../Components/Plotting";

export default function HomePage({
  fileObj,
  isUploaded,
  onUploadFile,
  onConversion,
  clickedChartType,
  onSelectChartType,
}) {
  return (
    <div>
      <UploadData
        fileObj={fileObj}
        isUploaded={isUploaded}
        onUploadFile={onUploadFile}
        onConversion={onConversion}
      />
      <ListOfCharts onSelectChartType={onSelectChartType} />
      <Plotting clickedChartType={clickedChartType} />
    </div>
  );
}
