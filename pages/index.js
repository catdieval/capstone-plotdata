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
import LayoutProperties from "../Components/LayoutProperties";

export default function HomePage({
  hasClickedGetStarted,
  onGetStarted,
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
  hasCompletedStep5,
  onHasCompletedStep5,
  hasCompletedDistributionProperties,
  onHasCompletedDistributionProperties,
  settings,
  onSettingsChange,
}) {
  return (
    <div>
      <StartPage onGetStarted={onGetStarted} />
      <UploadData
        fileObj={fileObj}
        onUploadFile={onUploadFile}
        onConversion={onConversion}
        hasClickedGetStarted={hasClickedGetStarted}
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
      <MarkerProperties
        clickedChartType={clickedChartType}
        onHasCompletedDistributionProperties={
          onHasCompletedDistributionProperties
        }
        hasCompletedStep5={hasCompletedStep5}
        settings={settings}
        onSettingsChange={onSettingsChange}
      />
      <LineProperties
        clickedChartType={clickedChartType}
        onHasCompletedDistributionProperties={
          onHasCompletedDistributionProperties
        }
        settings={settings}
        onSettingsChange={onSettingsChange}
        hasCompletedStep5={hasCompletedStep5}
      />
      <BarProperties
        clickedChartType={clickedChartType}
        onHasCompletedDistributionProperties={
          onHasCompletedDistributionProperties
        }
        hasCompletedStep5={hasCompletedStep5}
        settings={settings}
        onSettingsChange={onSettingsChange}
      />
      <LayoutProperties
        hasCompletedDistributionProperties={hasCompletedDistributionProperties}
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
