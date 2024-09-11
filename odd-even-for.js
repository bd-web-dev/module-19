for (let i = 1; i <= 10; i++) {
  console.log(i);
}

// The following will show error of "Assignment to constant variable"
// for (const i = 1; i <= 50; i++) {
//   console.log(i);
// }

for (let i = 0; i <= 20; i++) {
  if (i % 2 == 0) {
    console.log("Even number: " + i);
  } else {
    console.log("Odd number: " + i);
  }
}

// Below is not the best way of printing odd and even numbers
// In order to show only even numbers or odd numbers, modulo is better.
// Even numbers from 0 to 20
// Showing even numbers using i = i + 2. Works because i starts from 0, not 1
for (let i = 0; i <= 20; i = i + 2) {
  console.log(i);
}

// Odd numbers from 0 to 20
// Showing odd numbers using i = i + 2. Works because i starts from 1, not 0
for (let i = 1; i <= 20; i = i + 2) {
  console.log(i);
}
