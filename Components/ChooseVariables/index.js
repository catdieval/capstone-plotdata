import Heading from "../Heading";
import CenteredDiv from "../CenteredDiv";
import Paragraph from "../Paragraph";
import { StyledInputTypeSubmit } from "../StyledInputTypeSubmit";
import DropDownMenu from "../DropDownMenu";

export default function ChooseVariables({
  keynames,
  hasChosenYVariable,
  onAssignVariables,
  onXChange,
  onYChange,
  xKey,
  yKey,
}) {
  function handleSubmit(event) {
    event.preventDefault();
  }

  if (xKey == yKey && xKey !== "") {
    alert(
      "Are you sure you want to use the same variable for x as for y? It would give a meaningless plot."
    );
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
                onChange={onXChange}
                arrayOfOptions={keynames}
              />
              <Paragraph>Variable for the y-axis:</Paragraph>
              <DropDownMenu
                idString="y"
                onChange={onYChange}
                arrayOfOptions={keynames}
              />
              <br></br>
              <br></br>
              <StyledInputTypeSubmit
                value="Next"
                onClick={onAssignVariables}
                disabled={!hasChosenYVariable}
              />
            </CenteredDiv>
          </form>
        </>
      ) : null}
    </>
  );
}
