import useLocalStorageState from "use-local-storage-state";
import { useState } from "react";

export default function ChooseVariables({ keynames, vals }) {
  const [xVariable, setXVariable] = useLocalStorageState("xVariable", {
    defaultValue: [],
  });

  const [yVariable, setYVariable] = useLocalStorageState("yVariable", {
    defaultValue: [],
  });

  const [xKey, setXKey] = useLocalStorageState("xKey", {
    defaultValue: "",
  });

  const [yKey, setYKey] = useLocalStorageState("yKey", {
    defaultValue: "",
  });

  const [hasChosenYVariable, setHasChosenYVariable] = useState(false);

  function handleSubmit(event) {
    event.preventDefault();
  }

  function handleXChange(event) {
    const choice = event.target.value;
    if (choice != "") {
      setXKey(choice);
    }
  }

  function handleYChange(event) {
    const choice = event.target.value;
    if (choice != "") {
      setYKey(choice);
      setHasChosenYVariable(true);
    }
  }
}
