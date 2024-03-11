import Button from "../Button";
import Image from "next/image";
import { Container } from "../Container";

export default function ChartItem({ name, icon, onSelectChartType }) {
  return (
    <Container $direction="column">
      <Button onClick={onSelectChartType}>{name}</Button>
      <Image src={icon} height={200} width={200} alt={name} />
    </Container>
  );
}
