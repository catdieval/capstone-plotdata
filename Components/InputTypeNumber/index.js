import styled from "styled-components";

export default function InputTypeNumber({
  idString,
  valueString,
  onChange,
  labelString,
  nameString,
}) {
  return (
    <>
      <NumberInput>
        <Input
          type="number"
          id={idString}
          value={valueString}
          onChange={onChange}
          name={nameString}
        />
        <Label htmlFor={idString}>{labelString}</Label>
      </NumberInput>
    </>
  );
}

const Input = styled.input`
  width: 150px;
  margin: 10px;
`;

const Label = styled.label`
  margin: 10px;
`;

const NumberInput = styled.div`
  display: flex;
`;
