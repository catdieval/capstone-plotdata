import styled from "styled-components";
import { Container } from "../Container";

const StyledLabel = styled.label`
  font-weight: 400;
  margin: 0.3rem;
`;

const StyledSelect = styled.select`
  width: 100px;
`;

export default function DropDownMenu({ idString, onChange, arrayOfOptions }) {
  return (
    <Container $direction="column" $center>
      <StyledLabel htmlFor={idString}>{idString}</StyledLabel>
      <StyledSelect required name={idString} id={idString} onChange={onChange}>
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
