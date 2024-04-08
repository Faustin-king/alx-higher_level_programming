#!/usr/bin/node

// Define the add function
function add (a, b) {
  return a + b;
}

// check if both arguments are provided
if (process.argv[2] === undefined || process.argv[3] === undefined) {
  console.log('Missing arguments');
} else {
  // Parse the arguments as intergers
  const num1 = parseInt(process.argv[2]);
  const num2 = parseInt(process.argv[3]);

  // Check if both arguments are valid integers
  if (!isNaN(num1) && !isNaN(num2)) {
    // Call the add function and print the result
    console.log('The addition is:', add(num1, num2));
  } else {
    console.log('Invalid arguments');
  }
}
