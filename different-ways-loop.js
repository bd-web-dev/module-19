// Odd Number checking conditions
// i % 2 === 1 or
// i % 2 !== 0
// Even Number checking conditions
// i % 2 === 0 or
// i % 2 !== 1

console.log("Run 1");
for (let i = 0; i < 20; i++) {
  if (i % 2 === 1) {
    console.log(i);
  }
}

console.log("Run 2");
for (let i = 0; i < 20; i++) {
  if (i % 2 !== 0) {
    console.log(i);
  }
}

console.log("Run 3");
for (let i = 1; i < 20; i = i + 2) {
  console.log(i);
}

// Print numbers in range of 1 to 30 divisible by 5
console.log("Numbers in range of 1 to 30 divisible by 5");
for (let i = 1; i <= 30; i++) {
  if (i % 5 === 0) {
    console.log(i);
  }
}

// Print numbers in range of 1 to 30 divisible by 3
console.log("Numbers in range of 1 to 30 divisible by 3");
for (let i = 1; i <= 30; i++) {
  if (i % 3 === 0) {
    console.log(i);
  }
}

// Print numbers in range of 1 to 30 divisible by 3 or 5
console.log("Numbers in range of 1 to 30 divisible by 3 or 5");
for (let i = 1; i <= 30; i++) {
  if (i % 3 === 0 || i % 5 === 0) {
    console.log(i);
  }
}

// Print numbers in range of 1 to 30 divisible by 3 and 5
console.log("Numbers in range of 1 to 30 divisible by 3 and 5");
for (let i = 1; i <= 30; i++) {
  if (i % 3 === 0 && i % 5 === 0) {
    console.log(i);
  }
}

// Print the sum of numbers in range of 1 to 30 divisible by 3
console.log("Sum of numbers in range of 1 to 30 divisible by 3");
let sum = 0;
for (let i = 1; i <= 30; i++) {
  if (i % 3 === 0) {
    console.log("Number added in this iteration: " + i);
    sum = sum + i;
    console.log("Sum so far: " + sum);
  }
}
console.log("Total sum: " + sum);
