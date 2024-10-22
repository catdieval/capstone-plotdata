import {StyledInputTypeSubmit} from "./styledInputTypeSubmit"

export default function InputTypeSubmit({
  valueString,
  onClick,
  disabled,
}) {
  return (
    <StyledInputTypeSubmit
      value={valueString}
      onClick={onClick}
      disabled={disabled}
      />
  );
};
