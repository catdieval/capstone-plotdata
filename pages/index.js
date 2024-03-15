import UploadData from "../Components/UploadData";
import ListOfCharts from "../Components/ListOfCharts";
import Plotting from "../Components/Plotting";
import ChooseVariables from "../Components/ChooseVariables";

export default function HomePage({
  keynames,
  vals,
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
      <ListOfCharts onSelectChartType={onSelectChartType} keynames={keynames} />
      <ChooseVariables keynames={keynames} vals={vals} />
      <Plotting clickedChartType={clickedChartType} />
    </div>
  );
}
