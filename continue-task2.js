/*
 Display odd number from 55 to 85 and skip the numbers divisible by 5.
*/

let start = 55;
let end = 85;

for (let i = start; i <= end; i++) {
  if (i % 2 === 1) {
    if (i % 5 === 0) {
      continue;
    } else {
      console.log(i);
    }
  }
}
