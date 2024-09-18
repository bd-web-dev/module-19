/***
 
Subtask-1:

Find all the odd numbers from 61 to 100.

*/

let lowerBound = 61;
let upperBound = 100;
console.log("Subtask 1");

for (let counter = lowerBound; counter <= upperBound; counter++) {
  if (counter % 2 === 1) {
    console.log(counter);
  }
}

/***

Subtask-2:

Find all the even numbers from 78 to 98.

*/

lowerBound = 78;
upperBound = 98;
console.log("Subtask 2");

for (let counter = lowerBound; counter <= upperBound; counter++) {
  if (counter % 2 === 0) {
    console.log(counter);
  }
}
