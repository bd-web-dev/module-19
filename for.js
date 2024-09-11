// Parts of a while loop
// Loop variable: number
let number = 0;
// Loop condition: number < 5
while (number < 5) {
  // Loop body statement
  console.log(number);
  // Loop variable change
  number += 1;
}

// Same logic as above, implemented as a for loop (not for-of loop)
// for (firstPart; secondPart; thirdPart) {
//   loopStatement;
// }
// firstPart = Loop Variable;
// secondPart = Loop Condition;
// thirdPart = Loop Variable Change;
for (let number = 0; number < 5; number++) {
  console.log(number);
}
