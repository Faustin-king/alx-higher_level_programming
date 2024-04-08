#!/usr/bin/node
// Check if any arguments are passed to the script
if (process.argv[2] === undefined) {
  console.log('No argument');
} else {
  console.log(process.argv[2]);
}
