#!/usr/bin/node

// Convert the first argument to an inter using parseInt
const number = parseInt(process.argv[2]);
// Check if the conversion resulted in a valid interger
if (!isNaN(number)) {
  console.log(`My number: ${number}`);
} else {
  console.log('Not a number');
}
