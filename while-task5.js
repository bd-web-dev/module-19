/***

Implement a countdown timer that counts down from 21 to 15.

 */

let start = 21;
let counter = start;
let end = 15;

while (counter >= end) {
  console.log("Time left: ", counter);
  counter--;
}
