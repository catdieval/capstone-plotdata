import { Container } from "../Container";
import Paragraph from "../Paragraph";
import { StyledH3 } from "../Heading";
import UnorderedList from "../UnorderedList";
import Button from "../Button";
import ImageContainer from "../ImageContainer";
import Heading from "../Heading";
import Image from "next/image";
import { arrayOfSteps, arrayOfActions } from "../../lib/listOfBulletPoints";
import { examplePlotsArray } from "../../lib/examplePlotsArray";

export default function StartPage({ onGetStarted }) {
  return (
    <>
      <Paragraph>
        With PlotData you can easily make customisable publication-quality
        charts, all without programming skills.
      </Paragraph>
      <Container $wrap="wrap" $gap>
        {examplePlotsArray.map((item) => {
          return (
            <ImageContainer key={item.name}>
              <Image src={item.path} height={250} width={300} alt={item.name} />
            </ImageContainer>
          );
        })}
      </Container>
      <Heading>Overview:</Heading>
      <Container $centered="center">
        <UnorderedList $arrayOfBulletPoints={arrayOfSteps} />
      </Container>
      <Paragraph>
        Et voila! An interactive chart gets generated, with the help of the
        <br />
        <a href="https://plotly.com/javascript/basic-charts/" target="_blank">
          Plotly JavaScript library
        </a>
        .
      </Paragraph>
      <Container $centered="center">
        <UnorderedList $arrayOfBulletPoints={arrayOfActions} />
        <Container $centered="center" $margin>
          <Button onClick={onGetStarted}>Get started</Button>
        </Container>
      </Container>
    </>
  );
}
