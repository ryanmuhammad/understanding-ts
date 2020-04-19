function add(n1: number, n2: number) {
  return n1 + n2;
}

function printResult(num: number): void {
  // function return type void
  console.log("Result: " + num);
}

function addAndHandle(n1: number, n2: number, cb: (num: number) => void) { // callback
  const result = n1 + n2;
  cb(result);
}

printResult(add(5, 12));

let combineValues: (a: number, b: number) => number; // function as type

combineValues = add;
// combineValues = printResult;

console.log(combineValues(8, 8));

addAndHandle(10, 20, (result) => {
    console.log(result);
});
