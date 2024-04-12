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
      <input
        type="radio"
        name={nameString}
        value={valueString}
        id={idString}
        onChange={onChange}
        checked={checked()}
      />
      <Label htmlFor={idString}>{labelString}</Label>
    </RadioButton>
  );
}

const RadioButton = styled.div`
  display: flex;
`;

const Label = styled.label`
  display: flex;
  gap: 10rem;
  flex-direction: row;
`;
