// Cannot use const for sum
// Declaration of sum must be outside loop
// This is to prevent sum from resetting to 0
// at the start of each iteration of the loop
// which would happen if it was placed inside the loop
let sum = 0;
for (let i = 11; i <= 20; i++) {
  console.log("Current number of iteration: " + i);
  sum = sum + i;
  console.log("Sum so far " + sum);
}
console.log("Sum of numbers from 11 to 20:  " + sum);
