export default function InputTypeText({
  placeholderString,
  onChange,
  idString,
}) {
  return (
    <>
      <label htmlFor={idString}>{idString}:</label>
      <input
        name={idString}
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
