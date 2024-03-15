import { useState } from "react";
import Paragraph from "../Paragraph";
import InputTypeText from "../InputTypeText";
import Heading from "../Heading";
import { StyledInputTypeSubmit } from "../StyledInputTypeSubmit";
import CenteredDiv from "../CenteredDiv";

export default function XandYLabelsGraph({
  onXLabelChange,
  onYLabelChange,
  hasEnteredYLabel,
}) {
  const xKey = "age";
  const yKey = "boys-height";

  function handleSubmit(event) {
    event.preventDefault();
  }

  function handleAxesLabels() {
    alert("Labels for the x-axis and the y-axis of the graph are assigned");
  }

  return (
    <>
      {xKey != "" && yKey != "" ? (
        <>
          <Heading>Step 4: Give labels to axes</Heading>
          <Paragraph>
            For the x variable you chose:<br></br>
            {xKey}
          </Paragraph>
          <Paragraph>
            For the y variable you chose:<br></br>
            {yKey}
          </Paragraph>
          <CenteredDiv>
            <form onSubmit={handleSubmit}>
              <InputTypeText
                idString={"Label for the x-axis"}
                placeholderString={
                  "Fill me with name and unit, e.g. Age (years)"
                }
                onChange={onXLabelChange}
              />
              <br></br>
              <br></br>
              <InputTypeText
                idString={"Label for the y-axis"}
                placeholderString={
                  "Fill me with name and unit, e.g. Height (inches)"
                }
                onChange={onYLabelChange}
              />
              <br></br>
              <br></br>
              <StyledInputTypeSubmit
                value="Next"
                onClick={handleAxesLabels}
                disabled={!hasEnteredYLabel}
              />
            </form>
          </CenteredDiv>
        </>
      ) : null}
    </>
  );
}
