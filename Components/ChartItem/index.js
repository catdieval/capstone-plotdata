import useLocalStorageState from "use-local-storage-state";
import Button from "../Button";
import Image from "next/image";
import { FlexContainer } from "../FlexContainer";

export default function ChartItem({ name, icon }) {
  const [clickedChartType, setClickedChartType] = useLocalStorageState(
    "clickedChartType",
    { defaultValue: "" }
  );

  function handleClick(event) {
    setClickedChartType(event.target.innerText);
    alert(`You chose ${name}`);
  }

  return (
    <FlexContainer $direction="column">
      <Button onClick={handleClick}>{name}</Button>
      <Image src={icon} height={200} width={200} alt={name} />
    </FlexContainer>
  );
}
