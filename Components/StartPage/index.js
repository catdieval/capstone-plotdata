import { useState } from "react";
import { Container } from "../Container";
import Paragraph from "../Paragraph";
import { StyledH3 } from "../Heading";

export default function StartPage() {
  const [hasClickedGetStarted, setHasClickedGetStarted] = useState(false);

  function handleGetStarted() {
    setHasClickedGetStarted(true);
  }

  return (
    <>
      <Paragraph>
        With PlotData you can easily make customisable publication-quality
        graphs, all without programming skills.
      </Paragraph>
      <StyledH3>Overview:</StyledH3>
      <Paragraph>
        Et voila! An interactive graph gets generated, with the help of the{" "}
        <a href="https://plotly.com/javascript/basic-charts/" target="_blank">
          Plotly JavaScript library
        </a>
        .
      </Paragraph>
    </>
  );
}
