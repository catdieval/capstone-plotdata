import UploadData from "../Components/UploadData";
import ListOfCharts from "../Components/ListOfCharts";
import Plotting from "../Components/Plotting";
import ChooseVariables from "../Components/ChooseVariables";

export default function HomePage({
  keynames,
  fileObj,
  isUploaded,
  onUploadFile,
  onConversion,
  clickedChartType,
  onSelectChartType,
  xKey,
  yKey,
  xVariable,
  yVariable,
  hasChosenYVariable,
  onXChange,
  onYChange,
  onAssignVariables,
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
      <ChooseVariables
        keynames={keynames}
        hasChosenYVariable={hasChosenYVariable}
        onAssignVariables={onAssignVariables}
        onXChange={onXChange}
        onYChange={onYChange}
        xKey={xKey}
        yKey={yKey}
      />
      <Plotting
        clickedChartType={clickedChartType}
        xVariable={xVariable}
        yVariable={yVariable}
      />
    </div>
  );
}
