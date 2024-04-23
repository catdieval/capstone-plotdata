import Button from "../Button";
import Image from "next/image";
import Container from "../Container";
import styled from "styled-components";

const ImageContainer = styled.div`
  display: flex;
  justify-content: center;
`;
import ImageContainer from "../ImageContainer";
import { Container } from "../Container";
import Image from "next/image";

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
