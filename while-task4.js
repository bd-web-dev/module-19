/***

As Ersa is learning now, she wants to explore more and more. Tell Ersa to generate a multiplication table for number 5

 */

let counter = 0;
let upperBound = 100;
console.log("Multiplication table of 5 from 0 to 100.");

while (counter <= upperBound) {
  let result = 5 * counter;
  console.log("5 x " + counter + ": " + result);
  counter++;
}
