import UploadData from "../Components/UploadData";
import ListOfCharts from "../Components/ListOfCharts";
import Plotting from "../Components/Plotting";
import XandYLabelsGraph from "../Components/XandYLabelsGraph";
import ChooseVariables from "../Components/ChooseVariables";
import GraphTitle from "../Components/GraphTitle";
import PlottingProperties from "../Components/PlottingProperties";

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
  xKey,
  yKey,
  onAssignVariables,
  hasCompletedStep4,
  onHasCompletedStep4,
  onHasCompletedStep5,
  hasCompletedStep5,
  onHasCompletedDistProp,
  hasCompletedDistProp,
  onHasCompletedStep6,
  hasCompletedStep6,
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
        xKey={xKey}
        yKey={yKey}
      />
      <XandYLabelsGraph
        xKey={xKey}
        yKey={yKey}
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
      <PlottingProperties
        clickedChartType={clickedChartType}
        hasCompletedStep5={hasCompletedStep5}
        onHasCompletedDistProp={onHasCompletedDistProp}
        hasCompletedDistProp={hasCompletedDistProp}
        onHasCompletedStep6={onHasCompletedStep6}
        settings={settings}
        onSettingsChange={onSettingsChange}
      />
      <Plotting
        clickedChartType={clickedChartType}
        xVariable={xVariable}
        yVariable={yVariable}
        hasCompletedStep4={hasCompletedStep4}
        hasCompletedStep5={hasCompletedStep5}
        hasCompletedStep6={hasCompletedStep6}
        settings={settings}
        onSettingsChange={onSettingsChange}
      />
    </div>
  );
}
