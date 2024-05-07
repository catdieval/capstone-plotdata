import UploadData from "../UploadData";
import ListOfCharts from "../ListOfCharts";
import ChooseVariables from "../ChooseVariables";
import XandYLabelsGraph from "../XandYLabelsGraph";
import GraphTitle from "../GraphTitle";
import PlottingProperties from "../PlottingProperties";

export default function AllSteps({
  currentStep,
  id,
  fileObject,
  onUploadFile,
  onConversion,
  keynames,
  clickedChartType,
  onSelectChartType,
  onXChange,
  onYChange,
  xKey,
  yKey,
  xVariable,
  yVariable,
  settings,
  onSettingsChange,
}) {
  if (currentStep === 1 && id === 1) {
    return (
      <UploadData
        fileObject={fileObject}
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
      />
    );
  } else if (currentStep === 5 && id === 5) {
    return (
      <GraphTitle settings={settings} onSettingsChange={onSettingsChange} />
    );
  } else if (currentStep === 6 && id === 6) {
    return (
      <PlottingProperties
        clickedChartType={clickedChartType}
        settings={settings}
        onSettingsChange={onSettingsChange}
      />
    );
  }
}
