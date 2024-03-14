export default function CorrectArrays(arrayOfObjects) {
  // The first row in arraysOfObjects is an array of key names,
  // and the remaining rows are an arrays of objects

  // The array of objects returned by convertCSVToArray has one row
  // too many at the end (a copy of the last row), so we remove it
  //const [keyItems, ...csvArray] = arrayOfObjects.slice(0, -1);
  const [keyItems, ...csvArray] = arrayOfObjects;

  // The array of objects returned by convertCSVToArray converts the
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
