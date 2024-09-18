/* 
Write a loop to print even numbers from 1 to 40. Use continue to skip odd numbers.
*/

const start = 1;
const end = 40;

for (let i = start; i <= end; i++) {
  if (i % 2 === 0) {
    console.log(i);
  } else {
    continue;
  }
}
