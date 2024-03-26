import Heading from "../Heading";
import { useState } from "react";
import { Card } from "../Card/card.styled";
import { Container } from "../Container";
import Paragraph from "../Paragraph";

export default function LineProperties() {
  const [lineColor, setLineColor] = useState("");
  const [lineStyle, setLineStyle] = useState("");
  const [lineWidth, setLineWidth] = useState("");

  function handleSubmit(event) {
    event.preventDefault();
  }
  function handleLineColorChange(event) {
    setLineColor(event.target.value);
  }

  function handleLineStyleChange(event) {
    setLineStyle(event.target.value);
  }
  function handleLineWidthChange(event) {
    setLineWidth(event.target.value);
  }

  return (
    <Container $centered="center">
      <Heading>Line Properties</Heading>
      <form $variant="form" onSubmit={handleSubmit}>
        <Container>
          {" "}
          <Paragraph> Line color</Paragraph>
          <Paragraph> Line style</Paragraph>
          <Paragraph> Line width</Paragraph>
        </Container>
      </form>
    </Container>
  );
}
