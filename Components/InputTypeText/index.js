import { StyledInput } from "./styledInputTypeText";

export default function InputTypeText({
  placeholderString,
  onChange,
  idString,
  nameString,
}) {
  return (
    <>
      <label htmlFor={idString}>{idString}:</label>
      <StyledInput
        name={nameString}
        type="text"
        id={idString}
        placeholder={placeholderString}
        size={30}
        onChange={onChange}
        required
      />
    </>
  );
}
