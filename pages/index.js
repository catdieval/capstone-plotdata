import UploadData from "../Components/UploadData";
import ListOfCharts from "../Components/ListOfCharts";
import Plotting from "../Components/Plotting";
import XandYLabelsGraph from "../Components/XandYLabelsGraph";
import ChooseVariables from "../Components/ChooseVariables";
import GraphTitle from "@/Components/GraphTitle";

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
  onXChange,
  onYChange,
  onAssignVariables,
  onXLabelChange,
  onYLabelChange,
  xLabel,
  yLabel,
  titleLabel,
  onTitleChange,
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
        clickedChartType={clickedChartType}
        onAssignVariables={onAssignVariables}
        onXChange={onXChange}
        onYChange={onYChange}
        xKey={xKey}
        yKey={yKey}
      />
      <XandYLabelsGraph
        xKey={xKey}
        yKey={yKey}
        xVariable={xVariable}
        yVariable={yVariable}
        onXLabelChange={onXLabelChange}
        onYLabelChange={onYLabelChange}
        xLabel={xLabel}
        yLabel={yLabel}
      />
      <GraphTitle
        xLabel={xLabel}
        yLabel={yLabel}
        titleLabel={titleLabel}
        onTitleChange={onTitleChange}
      />
      <Plotting
        clickedChartType={clickedChartType}
        xVariable={xVariable}
        yVariable={yVariable}
        xLabel={xLabel}
        yLabel={yLabel}
        titleLabel={titleLabel}
      />
    </div>
  );
}
