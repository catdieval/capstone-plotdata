export default function InputTypeText({
  placeholderString,
  onChange,
  idString,
  nameString,
}) {
  return (
    <>
      <label htmlFor={idString}>{idString}:</label>
      <input
        name={nameString}
        type="text"
        id={idString}
        placeholder={placeholderString}
        size={50}
        onChange={onChange}
        required
      />
    </>
  );
}
