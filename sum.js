// Find sum of numbers from 1 to 10
let number = 1;
let sum = 0;
while (number <= 10) {
  console.log("Current number looped over is: " + number);
  sum = sum + number;
  number += 1;
  console.log("Sum so far is: " + sum);
}
console.log("The total sum is: " + sum);
