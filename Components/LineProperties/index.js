import Heading from "../Heading";
import { useState } from "react";

export default function LineProperties() {
  const [lineColor, setLineColor] = useState("");
  const [lineStyle, setLineStyle] = useState("");
  const [lineWidth, setLineWidth] = useState("");

  return <Heading>Line Properties</Heading>;
}
