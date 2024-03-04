import Button from "@/Components/Button";
import { useRef } from "react";
import styled from "styled-components";

const StyledInput = styled.input`
  display: none;
`;
export default function FileUploader({ onFileUploaded }) {
  // Create a reference to the hidden file input element
  const hiddenFileInput = useRef(null);

  // Programatically click the hidden file input element
  // when the Button component is clicked
  function handleClick() {
    hiddenFileInput.current.click();
  }
  // Call a function (passed as a prop from the parent component)
  // to handle the user-selected file
  function handleChange(event) {
    const fileUploaded = event.target.files[0];
    onFileUploaded(fileUploaded);
  }

  return (
    <>
      <Button onClick={handleClick}>Choose a file</Button>
      <StyledInput
        type="file"
        accept=".csv"
        ref={hiddenFileInput}
        onChange={handleChange}
      />
    </>
  );
}
