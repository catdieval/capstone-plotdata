export default function DropDownMenu({ idString, onChange, arrayOfOptions }) {
  return (
    <>
      <label htmlFor={idString}>{idString}</label>
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
