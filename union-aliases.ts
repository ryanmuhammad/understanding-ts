type Combineable = number | string; //type aliases / custom type
type ConversionDescriptor = "as-number" | "as-text";

function combine(
  input1: Combineable, // Union type
  input2: Combineable, // Union type
  resultConversion: ConversionDescriptor // Union and Literal types
) {
  let result;
  if (
    (typeof input1 === "number" && typeof input2 === "number") ||
    resultConversion === "as-number"
  ) {
    result = +input1 + +input2;
  } else {
    result = input1.toString() + input2.toString();
  }
  return result;
}

const combinedAges = combine(30, 26, "as-number");
console.log(combinedAges);

const combinedStringAges = combine("30", "26", "as-number");
console.log(combinedStringAges);

const combinedNames = combine("Max", "Anna", "as-text");
console.log(combinedNames);
