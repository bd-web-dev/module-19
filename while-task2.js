/***
 
Subtask-1:

Find all the odd numbers from 61 to 100.

*/

let lowerBound = 61;
let counter = lowerBound;
let upperBound = 100;
console.log("Subtask 1");

while (counter <= upperBound) {
  if (counter % 2 === 1) {
    console.log(counter);
  }
  counter++;
}

/***

Subtask-2:

Find all the even numbers from 78 to 98.

 */

lowerBound = 78;
counter = lowerBound;
upperBound = 98;
console.log("Subtask 2");

while (counter <= upperBound) {
  if (counter % 2 === 0) {
    console.log(counter);
  }
  counter++;
}
