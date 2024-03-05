import useLocalStorageState from "use-local-storage-state";
import FlexDiv from "../FlexContainer";
import Button from "../Button";
import Image from "next/image";
import { chartarray } from "@/lib/listofcharttypes";
import barplot from "../../assets/chart-types/bar-plot.svg";
import BarPlot from "@/utils/barplot";

const name = "bar-plot";

export default function ChartItem() {
  const [clickedChartType, setclickedChartType] = useLocalStorageState(
    "clickedChartType",
    { defaultValue: "" }
  );

  function handleClick(event) {
    setclickedChartType(event.target.innerText);
  }

  return (
    <FlexDiv $direction="column">
      <Button onClick={handleClick}>{`${name}`}</Button>
      <BarPlot />
      {/* <Image src={barplot} height={200} width={200} alt={chartarray.name} /> */}
    </FlexDiv>
  );
}
