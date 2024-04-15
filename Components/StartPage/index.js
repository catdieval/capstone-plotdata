import { useState } from "react";

export default function StartPage() {
  const [hasClickedGetStarted, setHasClickedGetStarted] = useState(false);

  function handleGetStarted() {
    setHasClickedGetStarted(true);
  }
}
