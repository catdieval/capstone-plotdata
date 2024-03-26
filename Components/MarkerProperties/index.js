import { useState } from "react";

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
}
