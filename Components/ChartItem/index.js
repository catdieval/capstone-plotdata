import useLocalStorageState from "use-local-storage-state";
import Button from "../Button";
import Image from "next/image";
import { FlexContainer } from "../FlexContainer";

export default function ChartItem({ name, icon }) {
  const [clickedChartType, setClickedChartType] = useLocalStorageState(
    "clickedChartType",
    { defaultValue: "" }
  );

  function handleChartType(element) {
    setClickedChartType(element.target.innerText);
    alert(`You chose ${element.target.innerText}`);
  }

  return (
    <FlexContainer $direction="column">
      <Button onClick={handleChartType}>{name}</Button>
      <Image src={icon} height={200} width={200} alt={name} />
    </FlexContainer>
  );
}
