import Paragraph from "../Components/Paragraph";
import UnorderedList from "../Components/UnorderedList";
import Button from "../Components/Button";
import ImageContainer from "../Components/ImageContainer";
import Heading from "../Components/Heading";
import Container from "../Components/Container";
import Image from "next/image";
import { arrayOfSteps, arrayOfActions } from "../lib/listOfBulletPoints";
import { examplePlotsArray } from "../lib/examplePlotsArray";
import { useRouter } from "next/router";

export default function StartPage() {
  const router = useRouter();

  function handleGetStarted() {
    router.push("/steps");
  }

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
        <Paragraph>
          You can find <a href="https://catdieval.github.io/" target="_blank">here</a> a CSV file for testing the process.
        </Paragraph>
        <Container $centered="center" $margin $margin_bottom>
          <Button onClick={handleGetStarted}>Get started</Button>
        </Container>
      </Container>
    </>
  );
}
