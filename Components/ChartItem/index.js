import Button from "../Button";
import Image from "next/image";
import { FlexContainer } from "../FlexContainer";

export default function ChartItem({ name, icon, onSelectChartType }) {
  return (
    <FlexContainer $direction="column">
      <Button onClick={onSelectChartType}>{name}</Button>
      <Image src={icon} height={200} width={200} alt={name} />
    </FlexContainer>
  );
}
