import UploadData from "../UploadData";
import ListOfCharts from "../ListOfCharts";
import ChooseVariables from "../ChooseVariables";
import XandYLabelsGraph from "../XandYLabelsGraph";
import GraphTitle from "../GraphTitle";
import PlottingProperties from "../PlottingProperties";

export default function AllSteps({
  fileObj,
  onUploadFile,
  onConversion,
  currentStep,
  id,
  keynames,
  clickedChartType,
  onSelectChartType,
  onXChange,
  onYChange,
  xKey,
  yKey,
  onAssignVariables,
  xVariable,
  yVariable,
  onHasCompletedStep4,
  hasCompletedStep4,
  onHasCompletedStep5,
  hasCompletedStep5,
  onHasCompletedDistProp,
  hasCompletedDistProp,
  onHasCompletedStep6,
  settings,
  onSettingsChange,
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
      />
    );
  } else if (currentStep === 3 && id === 3) {
    return (
      <ChooseVariables
        keynames={keynames}
        // onAssignVariables={onAssignVariables}
        onXChange={onXChange}
        onYChange={onYChange}
        xKey={xKey}
        yKey={yKey}
      />
    );
  } else if (currentStep === 4 && id === 4) {
    return (
      <XandYLabelsGraph
        xKey={xKey}
        yKey={yKey}
        xVariable={xVariable}
        yVariable={yVariable}
        settings={settings}
        onSettingsChange={onSettingsChange}
        onHasCompletedStep4={onHasCompletedStep4}
      />
    );
  } else if (currentStep === 5 && id === 5) {
    return (
      <GraphTitle
        settings={settings}
        onSettingsChange={onSettingsChange}
        hasCompletedStep4={hasCompletedStep4}
        onHasCompletedStep5={onHasCompletedStep5}
      />
    );
  } else if (currentStep === 6 && id === 6) {
    return (
      <PlottingProperties
        clickedChartType={clickedChartType}
        hasCompletedStep5={hasCompletedStep5}
        onHasCompletedDistProp={onHasCompletedDistProp}
        hasCompletedDistProp={hasCompletedDistProp}
        onHasCompletedStep6={onHasCompletedStep6}
        settings={settings}
        onSettingsChange={onSettingsChange}
      />
    );
  }
}
