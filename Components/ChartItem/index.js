import Button from "../Button";
import Image from "next/image";
import Container from "../Container";
import ImageContainer from "../ImageContainer";

export default function ChartItem({
  name,
  icon,
  onSelectChartType,
  clickedChartType,
}) {
  return (
    <Container $direction="column">
      <Button isActive={clickedChartType === name} onClick={onSelectChartType}>
        {name}
      </Button>
      <ImageContainer>
        <Image src={icon} height={200} width={200} alt={name} />
      </ImageContainer>
    </Container>
  );
}
