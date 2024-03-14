import useLocalStorageState from "use-local-storage-state";
import { useState } from "react";
import Heading from "../Heading";
import CenteredDiv from "../CenteredDiv";
import Paragraph from "../Paragraph";
import { StyledInputTypeSubmit } from "../StyledInputTypeSubmit";
import DropDownMenu from "../DropDownMenu";

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

  function handleAssignVariables() {
    if (vals.length > 0) {
      var tempXArray = new Array(vals.length);
      var tempYArray = new Array(vals.length);
      setXVariable(tempXArray);
      setYVariable(tempYArray);
      alert("Data for the x and y variables are assigned.");
      console.log(tempXArray);
    }
  }

  return (
    <>
      {keynames.length > 0 ? (
        <>
          <Heading>Step 3: choose the variables you want to plot</Heading>
          <form onSubmit={handleSubmit}>
            <CenteredDiv>
              <Paragraph>Variable for the x-axis:</Paragraph>
              <DropDownMenu
                idString="x"
                onChange={handleXChange}
                arrayOfOptions={keynames}
              />
              <Paragraph>Variable for the y-axis:</Paragraph>
              <DropDownMenu
                idString="y"
                onChange={handleYChange}
                arrayOfOptions={keynames}
              />
              <br></br>
              <br></br>
              <StyledInputTypeSubmit
                value="Next"
                onClick={handleAssignVariables}
                disabled={!hasChosenYVariable}
              />
            </CenteredDiv>
          </form>
        </>
      ) : null}
    </>
  );
}
