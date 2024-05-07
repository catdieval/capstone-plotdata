import Paragraph from "../Paragraph";
import UnorderedList from "../UnorderedList";
import Button from "../Button";
import ImageContainer from "../ImageContainer";
import Heading from "../Heading";
import Container from "../Container";
import Image from "next/image";
import { arrayOfSteps, arrayOfActions } from "../../lib/listOfBulletPoints";
import { examplePlotsArray } from "../../lib/examplePlotsArray";
import { arrayOfScreenTypes } from "../../lib/listOfScreenTypes";

export default function StartPage({
  typeOfScreen,
  hasClickedScreenButton,
  onClickScreenButton,
  onGetStarted,
}) {
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
          On what type of device are you? <br></br> Click one of the buttons
          below corresponding to your situation.
        </Paragraph>
        <Container $wrap="wrap">
          {arrayOfScreenTypes.map((name) => {
            return (
              <>
                <Button
                  key={name}
                  isActive={typeOfScreen === name}
                  onClick={() => onClickScreenButton(name)}
                >
                  {name}
                </Button>
              </>
            );
          })}
        </Container>
        <Container $centered="center" $margin>
          <Button onClick={onGetStarted} disabled={!hasClickedScreenButton}>
            Get started
          </Button>
        </Container>
      </Container>
    </>
  );
}
