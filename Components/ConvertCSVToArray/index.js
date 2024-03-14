import CheckIfValid from "./CheckIfValid";
import ConvertCSVToArrayOfObjects from "./ConvertCSVToArrayOfObjects";

export default function ConvertCSVToArray(data, { header, separator } = {}) {
  const thisOptions = {
    header: header !== false,
    separator: separator || ",",
  };

  CheckIfValid(data, thisOptions);

  return ConvertCSVToArrayOfObjects(data, thisOptions);
}
