import UploadData from "../UploadData";
import ListOfCharts from "../ListOfCharts";

export default function AllSteps({
  fileObj,
  onUploadFile,
  onConversion,
  currentStep,
  id,
  keynames,
  clickedChartType,
  onSelectChartType,
}) {
  if (currentStep === 1 && id === 1) {
    return (
      <UploadData
        fileObj={fileObj}
        onUploadFile={onUploadFile}
        onConversion={onConversion}
      />
    );
  } else if (currentStep === 2 && id === 2) {
    return (
      <ListOfCharts
        onSelectChartType={onSelectChartType}
        clickedChartType={clickedChartType}
        keynames={keynames}
      />
    );
  }
}
