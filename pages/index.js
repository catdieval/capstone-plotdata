import StartPage from "../Components/StartPage";
import UploadData from "../Components/UploadData";
import ListOfCharts from "../Components/ListOfCharts";
import Plotting from "../Components/Plotting";
import XandYLabelsGraph from "../Components/XandYLabelsGraph";
import ChooseVariables from "../Components/ChooseVariables";
import GraphTitle from "../Components/GraphTitle";
import PlottingProperties from "../Components/PlottingProperties";

export default function HomePage({
  hasClickedGetStarted,
  onGetStarted,
  keyNames,
  fileObject,
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
  settings,
  onSettingsChange,
  hasCompletedStep4,
  onHasCompletedStep4,
  onHasCompletedStep5,
  hasCompletedStep5,
  hasCompletedDistributionProperties,
  onHasCompletedDistributionProperties,
  onHasCompletedStep6,
  hasCompletedStep6,
}) {
  return (
    <div>
      <StartPage
        onGetStarted={onGetStarted}
      />
      <UploadData
        fileObject={fileObject}
        onUploadFile={onUploadFile}
        onConversion={onConversion}
        hasClickedGetStarted={hasClickedGetStarted}
      />
      <ListOfCharts
        onSelectChartType={onSelectChartType}
        keyNames={keyNames}
        clickedChartType={clickedChartType}
      />
      <ChooseVariables
        keyNames={keyNames}
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
        onHasCompletedDistributionProperties={
          onHasCompletedDistributionProperties
        }
        hasCompletedDistributionProperties={hasCompletedDistributionProperties}
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
      />
    </div>
  );
}
