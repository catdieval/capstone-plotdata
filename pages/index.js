import UploadData from "../Components/UploadData";
import ListOfCharts from "../Components/ListOfCharts";
import Plotting from "../Components/Plotting";
import XandYLabelsGraph from "../Components/XandYLabelsGraph";
import ChooseVariables from "../Components/ChooseVariables";
import GraphTitle from "../Components/GraphTitle";
import LineProperties from "../Components/LineProperties";
import BarProperties from "../Components/BarProperties";

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
  onLineColorChange,
  onLineStyleChange,
  onLineWidthChange,
  lineColor,
  lineStyle,
  lineWidth,
  barColor,
  onBarColorChange,
}) {
  return (
    <div>
      <UploadData
        fileObj={fileObj}
        isUploaded={isUploaded}
        onUploadFile={onUploadFile}
        onConversion={onConversion}
      />
      <ListOfCharts
        onSelectChartType={onSelectChartType}
        keynames={keynames}
        clickedChartType={clickedChartType}
      />
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
      <LineProperties
        clickedChartType={clickedChartType}
        titleLabel={titleLabel}
        onLineColorChange={onLineColorChange}
        onLineStyleChange={onLineStyleChange}
        onLineWidthChange={onLineWidthChange}
        lineColor={lineColor}
        lineStyle={lineStyle}
        lineWidth={lineWidth}
      />
      <BarProperties
        barColor={barColor}
        onBarColorChange={onBarColorChange}
        clickedChartType={clickedChartType}
        titleLabel={titleLabel}
      />
      <Plotting
        clickedChartType={clickedChartType}
        xVariable={xVariable}
        yVariable={yVariable}
        xLabel={xLabel}
        yLabel={yLabel}
        titleLabel={titleLabel}
        lineColor={lineColor}
        lineStyle={lineStyle}
        lineWidth={lineWidth}
        barColor={barColor}
      />
    </div>
  );
}
