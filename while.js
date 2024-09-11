const number = 7;
// Conditionals run once
console.log("Run 1");
if (number < 10) {
  console.log("I have got a small number.");
}
console.log("Something new is cooking.");

console.log("Run 2");
if (number < 1) {
  console.log("I have got a small number.");
}
console.log("Something new is cooking.");

// While Loop
// Loop variable
// Based on this variable, loop runs. So need to change value
// of this variable to make a valid loop.
let num = 0;
while (num < 5) {
  console.log(num);
  console.log("Looping");
  //   num = num + 1;
  //   num += 1;
  num++;
  console.log(num);
}
