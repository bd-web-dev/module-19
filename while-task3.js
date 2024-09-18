/***

Subtask-1:

Display sum of all the odd numbers from 81 to 131.

 */

let lowerBound = 81;
let counter = lowerBound;
let upperBound = 131;
let sum = 0;

while (counter <= upperBound) {
  if (counter % 2 === 1) {
    // console.log(counter);
    sum = sum + counter;
  }
  counter++;
}

console.log("Sum of odd numbers from 81 to 131: ", sum);

/***

Subtask-2:

Display sum of all the even numbers from 206 to 311.

 */

lowerBound = 206;
counter = lowerBound;
upperBound = 311;
sum = 0;
while (counter <= upperBound) {
  if (counter % 2 === 0) {
    // console.log(counter);
    sum = sum + counter;
  }
  counter++;
}

console.log("Sum of even numbers from 206 to 311: ", sum);
