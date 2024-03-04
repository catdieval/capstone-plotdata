export default function CorrectArrays(arrayOfObjects) {
  const [keyItems, ...csvArray] = arrayOfObjects.slice(0, -1);

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
