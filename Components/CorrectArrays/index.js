export default function CorrectArrays(arrayOfObjects) {
  // The first row in arraysOfObjects is an array of key names,
  // and the remaining rows are an arrays of objects

  const [keyItems, ...csvArray] = arrayOfObjects;

  // The array of objects returned by ConvertCSVToArray converts the
  // null values into strings, but we want to undo this.

  const correctedArray = csvArray.map((row) =>
    Object.fromEntries(
      Object.entries(row).map(([key, value]) => [
        key,
        value === "null" ? null : value,
      ])
    )
  );

  return [keyItems, ...correctedArray];
}
