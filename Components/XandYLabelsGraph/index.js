import { useState } from "react";
import Paragraph from "../Paragraph";
import InputTypeText from "../InputTypeText";
import Heading from "../Heading";
import { StyledInputTypeSubmit } from "../StyledInputTypeSubmit";
import CenteredDiv from "../CenteredDiv";

export default function XandYLabelsGraph({
  handleXLabelChange,
  handleYLabelChange,
  hasEnteredYLabel,
}) {
  function handleSubmit(event) {
    event.preventDefault();
  }

  function handleAxesLabels() {
    alert("Labels for the x-axis and the y-axis of the graph are assigned");
  }

  return (
    <>
      <Heading>Step 4: Give labels to axes</Heading>
      <Paragraph>
        For the x variable you chose:<br></br>
        {"Age"}
      </Paragraph>
      <Paragraph>
        For the y variable you chose:<br></br>
        {"Height"}
      </Paragraph>
      <CenteredDiv>
        <form onSubmit={handleSubmit}>
          <InputTypeText
            idString={"Label for the x-axis"}
            placeholderString={"Fill me with name and unit, e.g. Age (years)"}
            onChange={handleXLabelChange}
          />
          <br></br>
          <br></br>
          <InputTypeText
            idString={"Label for the y-axis"}
            placeholderString={
              "Fill me with name and unit, e.g. Height (inches)"
            }
            onChange={handleYLabelChange}
          />
          <br></br>
          <br></br>
          <StyledInputTypeSubmit
            type="submit"
            value="Next"
            onClick={handleAxesLabels}
            disabled={!hasEnteredYLabel}
          />
        </form>
      </CenteredDiv>
    </>
  );
}
