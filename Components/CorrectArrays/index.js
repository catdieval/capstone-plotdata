export default function CorrectArrays(arrayofobjects) {
  const [keyitems, ...csvArray] = arrayofobjects;
  const csvArray2 = csvArray.filter(
    (row, index, arr) => index !== arr.length - 1
  );

  let csvArray3 = [...csvArray2];
  for (let i = 0; i < csvArray3.length; i++) {
    for (let key in csvArray3[i]) {
      if (csvArray3[i][key] == "null") {
        csvArray3[i][key] = JSON.parse(csvArray3[i][key]);
      }
    }
  }
  return [keyitems, ...csvArray3];
}
