import styled from "styled-components";
import Container from "../Container";

const StyledLabel = styled.label`
  font-weight: 400;
  margin: 0.3rem;
`;

const StyledSelect = styled.select`
  width: 160px;
  padding: 0.4rem 0.4rem;
  border: none;
  border-radius: 0.3rem;
  background-color: #ececec;
  box-shadow: 0px 1px 4px -2px rgba(0, 0, 0, 0.1);
`;

export default function DropDownMenu({
  idString,
  nameString,
  onChange,
  arrayOfOptions,
}) {
  return (
    <Container $direction="column" $center>
      <StyledLabel htmlFor={idString}>{idString}</StyledLabel>
      <StyledSelect
        required
        name={nameString}
        id={idString}
        onChange={onChange}
      >
        <option value="">Select</option>
        {arrayOfOptions.map((optionName) => (
          <option key={optionName} value={optionName}>
            {optionName}
          </option>
        ))}
      </StyledSelect>
    </Container>
  );
}
