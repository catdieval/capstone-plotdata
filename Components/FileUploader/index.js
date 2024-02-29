import Button from "@/Layout/Button";
import { useRef } from "react";

export default function FileUploader() {
  const hiddenFileInput = useRef(null);

  function handleClick() {
    hiddenFileInput.current.click();
  }

  return (
    <>
      <Button onClick={handleClick}>Choose a file</Button>
      <input type="file" accept=".csv" ref={hiddenFileInput} />
    </>
  );
}
