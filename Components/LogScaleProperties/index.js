import DialogBox from "../DialogBox";
import { useState } from "react";

export default function LogScaleProperties() {
  const initialLogScaleStates = {
    logXAxis: "",
    logYAxis: "",
  };

  const [logScaleAxis, setLogScaleAxis] = useState(initialLogScaleStates);
  return (
    <>
      <DialogBox />
    </>
  );
}
