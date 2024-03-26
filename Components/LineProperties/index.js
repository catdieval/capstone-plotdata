import Heading from "../Heading";
import { useState } from "react";

export default function LineProperties() {
  const [lineColor, setLineColor] = useState("");
  const [lineStyle, setLineStyle] = useState("");
  const [lineWidth, setLineWidth] = useState("");

  function handleLineColorChange(event) {
    setLineColor(event.target.value);
  }

  function handleLineStyleChange(event) {
    setLineStyle(event.target.value);
  }
  function handleLineWidthChange(event) {
    setLineWidth(event.target.value);
  }

  return <Heading>Line Properties</Heading>;
}
