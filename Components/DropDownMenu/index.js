import styled from "styled-components";
import { Container } from "../Container";

const StyledLabel = styled.label`
  font-weight: 400;
  margin: 0.3rem;
`;

export default function DropDownMenu({ idString, onChange, arrayOfOptions }) {
  return (
    <Container $direction="column" $center>
      <StyledLabel htmlFor={idString}>{idString}</StyledLabel>
      <select required name={idString} id={idString} onChange={onChange}>
        <option value="">Select</option>
        {arrayOfOptions.map((optionName) => (
          <option key={optionName} value={optionName}>
            {optionName}
          </option>
        ))}
      </select>
    </Container>
  );
}
