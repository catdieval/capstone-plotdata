import { useState } from "react";
import Paragraph from "../Paragraph";
import InputTypeText from "../InputTypeText";
import Heading from "../Heading";
import { StyledInputTypeSubmit } from "../StyledInputTypeSubmit";

export default function XandYLabelsGraph({
  XLabel,
  YLabel,
  handleXLabelChange,
  handleYLabelChange,
}) {
  const [hasEnteredYLabel, sethasEnteredYLabel] = useState("false");

  function handleSubmit(event) {
    event.preventDefault();
  }

  function handleAxesLabels() {
    alert("Labels for the x-axis and the y-axis of the graph are assigned");
  }

  return (
    <>
      <Heading>Step 4: Give labels to axes</Heading>
      <Paragraph>For the x variable you chose:{"Age"}</Paragraph>
      <Paragraph>For the y variable you chose:{"Height"}</Paragraph>
      <form onSubmit={handleSubmit}>
        <InputTypeText
          idString={"Label for the x-axis"}
          placeholderString={"Fill me with name and unit, e.g. Age (years)"}
          onChange={handleXLabelChange}
        />
        <InputTypeText
          idString={"Label for the y-axis"}
          placeholderString={"Fill me with name and unit, e.g. Height (inches)"}
          onChange={handleYLabelChange}
        />
        <StyledInputTypeSubmit
          type="submit"
          value="Next"
          onClick={handleAxesLabels}
          disabled={!hasEnteredYLabel}
        />
      </form>
    </>
  );
}
