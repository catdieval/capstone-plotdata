import styled from "styled-components";

export default function InputTypeRadio({
  name,
  value,
  onChange,
  idString,
  label,
}) {
  function checked() {
    name === value;
  }

  return (
    <>
      <RadioButton>
        <input
          type="radio"
          name={name}
          value={value}
          id={idString}
          onChange={onChange}
          checked={checked()}
        />
        <Label htmlFor={idString}>{label}</Label>
      </RadioButton>
    </>
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
