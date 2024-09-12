// Incremental for loop
for (let i = 0; i <= 10; i++) {
  console.log(i);
}

// Decremental for loop wrong way
// Will cause an infinite loop
// Once decremented from 10, i <= 10 will always be true
// for (let i = 10; i <= 10; i--) {
//   console.log(i);
// }

// Decremental for loop right way
for (let i = 10; i >= 0; i--) {
  console.log(i);
}

for (i = 20; i >= 11; i--) {
  console.log(i);
}
