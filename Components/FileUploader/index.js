import Button from "@/Layout/Button";
import { useRef } from "react";

export default function FileUploader({ handleFile }) {
  const hiddenFileInput = useRef(null);

  function handleClick() {
    hiddenFileInput.current.click();
  }

  function handleChange(event) {
    const fileUploaded = event.target.files[0];
    handleFile(fileUploaded);
  }

  return (
    <>
      <Button onClick={handleClick}>Choose a file</Button>
      <input
        type="file"
        accept=".csv"
        ref={hiddenFileInput}
        onChange={handleChange}
      />
    </>
  );
}
