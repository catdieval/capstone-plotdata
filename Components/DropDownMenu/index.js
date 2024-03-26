import styled from "styled-components";

const StyledLabel = styled.label`
  font-weight: 400;
  margin: 0.6rem;
`;

export default function DropDownMenu({ idString, onChange, arrayOfOptions }) {
  return (
    <>
      <StyledLabel htmlFor={idString}>{idString}</StyledLabel>
      <select required name={idString} id={idString} onChange={onChange}>
        <option value="">Select</option>
        {arrayOfOptions.map((optionName) => (
          <option key={optionName} value={optionName}>
            {optionName}
          </option>
        ))}
      </select>
    </>
  );
}
