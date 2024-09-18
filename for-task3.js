/***

Subtask-1:

Display sum of all the odd numbers from 81 to 131.

 */

let lowerBound = 81;
let upperBound = 131;
let sum = 0;
console.log("Subtask 1");

for (let counter = lowerBound; counter <= upperBound; counter++) {
  if (counter % 2 === 1) {
    sum = sum + counter;
  }
}

console.log("Sum of odd numbers from 81 to 131: ", sum);

/***

Subtask-2:

Display sum of all the even numbers from 206 to 311.

 */

lowerBound = 206;
upperBound = 311;
sum = 0;
console.log("Subtask 2");

for (counter = lowerBound; counter <= upperBound; counter++) {
  if (counter % 2 === 0) {
    sum = sum + counter;
  }
}

console.log("Sum of even numbers from 206 to 311: ", sum);
