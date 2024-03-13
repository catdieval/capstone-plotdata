export default function DropDownMenu({ idString, onChange, arrayOfOptions }) {
  return (
    <>
      <label htmlFor={idString}>{idString}:</label>
      <select required name={idString} id={idString} onChange={onChange}>
        <option value="">Select</option>
        {arrayOfOptions.map((optionname) => (
          <option key={optionname} value={optionname}>
            {optionname}
          </option>
        ))}
      </select>
    </>
  );
}
