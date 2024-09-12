// Continue -> Skip rest of code for this iteration.
// Break -> Done with this loop. Loop ends.
console.log("Only show even numbers. Skip odd numbers where modulo gives 1.");
for (let i = 1; i < 10; i++) {
  if (i % 2 === 1) {
    continue;
  }
  console.log(i);
}

// Only prints numbers divisible by 5
// All other numbers not divisible by 5 are skipped using continue
console.log("Only print numbers divisible by 5");
let n = 0;
while (n < 50) {
  if (n % 5 !== 0) {
    n++;
    continue;
  }
  console.log(n);
  n++;
}
