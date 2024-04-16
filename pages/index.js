import UploadData from "../Components/UploadData";
import ListOfCharts from "../Components/ListOfCharts";
import Plotting from "../Components/Plotting";
import XandYLabelsGraph from "../Components/XandYLabelsGraph";
import ChooseVariables from "../Components/ChooseVariables";
import GraphTitle from "../Components/GraphTitle";
import LineProperties from "../Components/LineProperties";
import BarProperties from "../Components/BarProperties";
import MarkerProperties from "../Components/MarkerProperties";
import GridProperties from "../Components/GridProperties";
import RangeProperties from "../Components/RangeProperties";
import LogScaleProperties from "../Components/LogScaleProperties";

export default function HomePage({
  keynames,
  fileObj,
  onUploadFile,
  onConversion,
  clickedChartType,
  onSelectChartType,
  xVariable,
  yVariable,
  onXChange,
  onYChange,
  onAssignVariables,
  hasCompletedStep4,
  onHasCompletedStep4,
  hasCompletedStep5,
  onHasCompletedStep5,
  settings,
  onSettingsChange,
}) {
  return (
    <div>
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
        settings={settings}
      />
      <XandYLabelsGraph
        xVariable={xVariable}
        yVariable={yVariable}
        settings={settings}
        onSettingsChange={onSettingsChange}
        onHasCompletedStep4={onHasCompletedStep4}
      />
      <GraphTitle
        settings={settings}
        onSettingsChange={onSettingsChange}
        hasCompletedStep4={hasCompletedStep4}
        onHasCompletedStep5={onHasCompletedStep5}
      />
      <MarkerProperties
        clickedChartType={clickedChartType}
        hasCompletedStep5={hasCompletedStep5}
        settings={settings}
        onSettingsChange={onSettingsChange}
      />
      <LineProperties
        clickedChartType={clickedChartType}
        settings={settings}
        onSettingsChange={onSettingsChange}
      />
      <BarProperties
        clickedChartType={clickedChartType}
        settings={settings}
        onSettingsChange={onSettingsChange}
      />
      <GridProperties settings={settings} onSettingsChange={onSettingsChange} />
      <RangeProperties
        settings={settings}
        onSettingsChange={onSettingsChange}
      />
      <LogScaleProperties
        settings={settings}
        onSettingsChange={onSettingsChange}
      />
      <Plotting
        clickedChartType={clickedChartType}
        xVariable={xVariable}
        yVariable={yVariable}
        hasCompletedStep4={hasCompletedStep4}
        hasCompletedStep5={hasCompletedStep5}
        settings={settings}
        onSettingsChange={onSettingsChange}
      />
    </div>
  );
}
