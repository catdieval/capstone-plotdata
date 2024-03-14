export default function InputTypeText({
  placeholderString,
  onChange,
  idString,
}) {
  return (
    <label htmlFor="idString">
      {idString}:
      <input
        type="text"
        id={idString}
        placeholder={placeholderString}
        size={100}
        onChange={onChange}
        required
      />
    </label>
  );
}
