import styled from "styled-components";

export default function InputTypeRadio({
  nameString,
  valueString,
  onChange,
  idString,
  labelString,
}) {
  function checked() {
    nameString === valueString;
  }

  return (
    <RadioButton>
      <StyledInputRadio
        type="radio"
        name={nameString}
        value={valueString}
        id={idString}
        onChange={onChange}
        checked={checked()}
      />
      <StyledLabel htmlFor={idString}>{labelString}</StyledLabel>
    </RadioButton>
  );
}

const RadioButton = styled.div`
  display: flex;
  gap: 4px;
  flex-direction: row;
`;

const StyledInputRadio = styled.input.attrs({
  type: "radio",
})`
  transform: scale(1.4);
  margin: 8px;
`;
const StyledLabel = styled.label`
  font-size: 1.1rem;
`;
