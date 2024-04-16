import { useState } from "react";
import { Container } from "../Container";
import Paragraph from "../Paragraph";
import { StyledH3 } from "../Heading";
import UnorderedList from "../UnorderedList";
import Button from "../Button";
import Image from "next/image";
import { arrayOfSteps, arrayOfActions } from "../../lib/listOfBulletPoints";
import { examplePlotsArray } from "../../lib/examplePlotsArray";

export default function StartPage() {
  const [hasClickedGetStarted, setHasClickedGetStarted] = useState(false);

  const ImageContainer = styled.div`
    display: flex;
    justify-content: center;
  `;

  function handleGetStarted() {
    setHasClickedGetStarted(true);
  }

  return (
    <>
      <Paragraph>
        With PlotData you can easily make customisable publication-quality
        graphs, all without programming skills.
      </Paragraph>
      <Container $wrap="wrap">
        {examplePlotsArray.map((item) => {
          return (
            <ImageContainer key={item.name}>
              <Image src={item.path} height={200} width={200} alt={item.name} />
            </ImageContainer>
          );
        })}
      </Container>
      <StyledH3>Overview:</StyledH3>
      <Container $centered="center">
        <UnorderedList $arrayOfBulletPoints={arrayOfSteps} />
      </Container>
      <Paragraph>
        Et voila! An interactive graph gets generated, with the help of the{" "}
        <a href="https://plotly.com/javascript/basic-charts/" target="_blank">
          Plotly JavaScript library
        </a>
        .
      </Paragraph>
      <Container $centered="center">
        <UnorderedList $arrayOfBulletPoints={arrayOfActions} />
        <Button onClick={handleGetStarted}>Get started</Button>
      </Container>
    </>
  );
}
