import StartPage from "../Components/StartPage";
import UploadData from "../Components/UploadData";
import ListOfCharts from "../Components/ListOfCharts";
import Plotting from "../Components/Plotting";
import XandYLabelsGraph from "../Components/XandYLabelsGraph";
import ChooseVariables from "../Components/ChooseVariables";
import GraphTitle from "../Components/GraphTitle";
import LineProperties from "../Components/LineProperties";
import BarProperties from "../Components/BarProperties";
import MarkerProperties from "../Components/MarkerProperties";

export default function HomePage({
  keynames,
  fileObj,
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
  hasCompletedStep4,
  onHasCompletedStep4,
  titleLabel,
  onTitleChange,
  hasCompletedStep5,
  onHasCompletedStep5,
  lineColor,
  lineStyle,
  lineWidth,
  onLineColorChange,
  onLineStyleChange,
  onLineWidthChange,
  barColor,
  onBarColorChange,
  markerColor,
  markerSymbol,
  markerSize,
  onMarkerColorChange,
  onMarkerSymbolChange,
  onMarkerSizeChange,
}) {
  return (
    <div>
      <StartPage />
      <UploadData
        fileObj={fileObj}
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
        onHasCompletedStep4={onHasCompletedStep4}
      />
      <GraphTitle
        xLabel={xLabel}
        yLabel={yLabel}
        titleLabel={titleLabel}
        onTitleChange={onTitleChange}
        hasCompletedStep4={hasCompletedStep4}
        onHasCompletedStep5={onHasCompletedStep5}
      />
      <MarkerProperties
        clickedChartType={clickedChartType}
        hasCompletedStep5={hasCompletedStep5}
        markerColor={markerColor}
        markerSymbol={markerSymbol}
        markerSize={markerSize}
        onMarkerColorChange={onMarkerColorChange}
        onMarkerSymbolChange={onMarkerSymbolChange}
        onMarkerSizeChange={onMarkerSizeChange}
      />
      <LineProperties
        clickedChartType={clickedChartType}
        hasCompletedStep5={hasCompletedStep5}
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
        hasCompletedStep5={hasCompletedStep5}
      />
      <Plotting
        clickedChartType={clickedChartType}
        xVariable={xVariable}
        yVariable={yVariable}
        xLabel={xLabel}
        yLabel={yLabel}
        hasCompletedStep4={hasCompletedStep4}
        titleLabel={titleLabel}
        hasCompletedStep5={hasCompletedStep5}
        lineColor={lineColor}
        lineStyle={lineStyle}
        lineWidth={lineWidth}
        barColor={barColor}
        markerColor={markerColor}
        markerSymbol={markerSymbol}
        markerSize={markerSize}
      />
    </div>
  );
}
