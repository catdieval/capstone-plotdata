import Heading from "../Heading";
import Container from "../Container";
import Paragraph from "../Paragraph";
import InputTypeSubmit from "../InputTypeSubmit";
import DropDownMenu from "../DropDownMenu";

export default function ChooseVariables({
  keyNames,
  clickedChartType,
  onAssignVariables,
  onXChange,
  onYChange,
  xKey,
  yKey,
}) {
  function handleSubmit(event) {
    event.preventDefault();
  }

  if (xKey === yKey && xKey !== "") {
    alert(
      "Are you sure you want to use the same variable for x as for y? It would give a meaningless plot."
    );
  }

  function notCompletedXAndYKeys() {
    return xKey.length === 0 || yKey.length === 0;
  }

  return (
    <>
      {clickedChartType.length > 0 && (
        <>
          <Heading>Step 3: Choose the variables you want to plot</Heading>
          <form onSubmit={handleSubmit}>
            <Container $centered="center">
              <Paragraph $variant="start">Variable for the x-axis:</Paragraph>
              <DropDownMenu
                idString="x:"
                onChange={onXChange}
                arrayOfOptions={keyNames}
              />
              <Paragraph $variant="start">Variable for the y-axis:</Paragraph>
              <DropDownMenu
                idString="y:"
                onChange={onYChange}
                arrayOfOptions={keyNames}
              />
              {(xKey != "" || yKey != "") && (
                <Paragraph $variant="red-step3">
                  Attention! if you change again the variable for an axis, then
                  you must click on the button below to update the chart!
                </Paragraph>
              )}
              <InputTypeSubmit
                value="Next"
                onClick={onAssignVariables}
                disabled={notCompletedXAndYKeys()}
              />
            </Container>
          </form>
        </>
      )}
    </>
  );
}
