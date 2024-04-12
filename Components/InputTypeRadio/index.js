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
    <>
      <RadioButton>
        <input
          type="radio"
          name={nameString}
          value={valueString}
          id={idString}
          onChange={onChange}
          checked={checked()}
        />
        <label htmlFor={idString}>{labelString}</label>
      </RadioButton>
    </>
  );
}

const RadioButton = styled.div`
  display: flex;
  gap: 4px;
  flex-direction: row;
`;
