// - Write a node program that takes in an unlimited number of command line arguments, goes through each and prints out the sum of them. If any argument is not a whole number, skip it. Do support negative numbers though. If any argument is not a number, output an error message. We need at least 2 arguments.

// List the steps to solve this

// Retrieve command line arguments
const args = process.argv.slice(2);
// validation
console.log('Args:', args);
// Edge case: Check if there are enough command-line arguments -  We need at least 2 arguments

if (args.length < 2) {
  console.log(`Error, please enter at least 2 args`);
  process.exit();
}

// iterate through the arguments
// types of for loops? c-style (for let i; ...;), for of

// have an accumalator to hold the sum
let total = 0;

for (let arg of args) {
  // we are iterating over the value. no index.

  // Calculate the sum, add the arguments

  // arg % 1 === 0 > integer
  // Number.isInteger()

  // Edge case: check if an argument is not a number - If any argument is not a whole number, skip it
  if (Number.isInteger(Number(arg))) {
    total += Number(arg); // typecasting
  }
  // Edge case:  Check if the provided arguments are valid numbers (If any argument is not a number, output an error message)
  if (isNaN(Number(arg))) {
    console.log(`Error: please enter only numbers`);
    // stop here
    process.exit(); // <= stop the exection
  }

  console.log('arg:', arg, 'type:', typeof Number(arg), 'total:', total);
}

console.log('Total:', total);
