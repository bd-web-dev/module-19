console.log("Run 1");
let i = 0;
while (i < 5) {
  console.log(i);
  i++;
}

// No output on this run
// Will not run even once if condition is not fulfilled
console.log("Run 2");
i = 10;
while (i < 5) {
  console.log(i);
  i++;
}

console.log("Do-while loop.");
let n = 0;
do {
  console.log(n);
  n++;
} while (n < 5);

console.log(
  "Do-while loop which runs body only once due to braces followed by do."
);
n = 10;
do {
  console.log(n);
  n++;
} while (n < 5);
