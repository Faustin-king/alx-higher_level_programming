#!/usr/bin/node
// Check the number of arguments passed to the script.
const numOfArgs = process.argv.length - 2;

// Print message based on the number of arguments
if (numOfArgs === 0) {
  console.log('No argument');
} else if (numOfArgs === 1) {
  console.log('Argument found');
} else {
  console.log('Arguments found');
}
