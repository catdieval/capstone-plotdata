import { useState } from "react";
import Heading from "../Heading";
import { Container } from "../Container";
import Paragraph from "../Paragraph";

export default function MarkerProperties() {
  const [markerColor, setMarkerColor] = useState("");
  const [markerSymbol, setMarkerSymbol] = useState("");
  const [markerSize, setMarkerSize] = useState(0);

  function handleMarkerColorChange(event) {
    const choice = event.target.value;
    setMarkerColor(choice);
  }

  function handleMarkerSymbolChange(event) {
    const choice = event.target.value;
    setMarkerSymbol(choice);
  }

  function handleMarkerSize(event) {
    const choice = event.target.value;
    setMarkerSize(choice);
  }

  function completedMarkerProperties() {
    return (
      markerColor.length === 0 ||
      markerSymbol.length === 0 ||
      markerSize.length === 0
    );
  }

  function handleMarkerProperties() {
    alert("You chose the marker properties.");
  }

  function handleSubmit(event) {
    event.preventDefault();
  }

  return (
    <>
      <Heading>Marker properties</Heading>
      <form onSubmit={handleSubmit}>
        <Container $centered="center">
          <Paragraph>Marker color:</Paragraph>
          <Paragraph>Marker symbol:</Paragraph>
          <Paragraph>Marker size:</Paragraph>
        </Container>
      </form>
    </>
  );
}
