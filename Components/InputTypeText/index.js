export default function InputTypeText({
  placeholderString,
  onChange,
  idString,
}) {
  return (
    <form>
      <label htmlFor="idString">
        `${idString}:`
        <input
          type="text"
          id={idString}
          placeholder={placeholderString}
          onChange={onChange}
          required
        />
      </label>
    </form>
  );
}
