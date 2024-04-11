import styled from "styled-components";

export default function InputTypeNumber({
  idString,
  valueString,
  onChange,
  labelString,
  nameString,
  placeholderString,
}) {
  return (
    <>
      <NumberInput>
        <Label htmlFor={idString}>{labelString}</Label>
        <Input
          type="number"
          id={idString}
          value={valueString}
          onChange={onChange}
          name={nameString}
          placeholder={placeholderString}
        />
      </NumberInput>
    </>
  );
}

const Input = styled.input`
  width: 180px;
  margin: 10px;
`;

const Label = styled.label`
  margin: 10px;
`;

const NumberInput = styled.div`
  display: flex;
`;
