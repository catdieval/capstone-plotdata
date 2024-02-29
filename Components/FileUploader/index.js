import Button from "@/Layout/Button";
import { useRef } from "react";

export default function FileUploader() {
  const hiddenFileInput = useRef(null);
  return (
    <>
      <Button onClick={""}>Choose a file</Button>
      <input type="file" accept=".csv" ref={hiddenFileInput} />
    </>
  );
}
