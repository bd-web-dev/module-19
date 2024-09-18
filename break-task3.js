/* 
Write a loop that goes from 1 to 100, but stops (using break) when it encounters the first square number (like 4, 9, 16, etc.)
*/

let i = 1;
while (i <= 100) {
  console.log(i);
  // Check for perfect square
  const squareRoot = Math.sqrt(i);
  const isPerfectSquare = Number.isInteger(squareRoot);
  if (isPerfectSquare && i != 1) {
    break;
  }
  i++;
}
