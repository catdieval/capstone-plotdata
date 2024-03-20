import { convertStringToNumber } from "convert-string-to-number";

export default function convertCSVToArrayOfObjects(
  data,
  { header, separator }
) {
  const csv = data;

  const rows = csv.split("\n");

  // rows contains an inpredictable number of extra rows at the end which are empty
  // strings with unpredictable length (the function was impure), so we remove the
  // blank spaces from the strings in rows
  const rows2 = rows.map((row) => {
    return row.trim();
  });

  // rows2 now contains extra rows with "", so we filter out these strings
  const rows3 = rows2.filter((row) => {
    return row !== "";
  });

  const array = [];

  let headerRow;
  let headerObj;
  const content = [];

  rows3.forEach((row, idx) => {
    if (idx === 0) {
      headerRow = row.split(separator);
      if (header) {
        array.push(headerRow);
      }
      headerRow.forEach((headerItem) => {
        headerObj = Object.assign({}, headerObj, {
          [headerItem]: undefined,
        });
      });
    } else if (rows3.length !== idx) {
      const values = row.split(separator);

      values.forEach((value, i) => {
        const convertedToNumber = convertStringToNumber(value);
        const thisValue = Number.isNaN(convertedToNumber)
          ? value
          : convertedToNumber;
        headerObj = Object.assign({}, headerObj, {
          [headerRow[i]]: thisValue,
        });
      });

      content.push(headerObj);
    }
  });

  array.push(...content);

  return array;
}
