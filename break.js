for (let i = 0; i < 15; i++) {
  console.log(i);
  if (i >= 5) {
    break;
  }
}
console.log("Code after for loop break.");

let num = 54;
console.log("Run 1");
while (num > 25) {
  console.log(num);
  num--;
}

num = 54;
console.log("Run 2");
while (num > 25) {
  console.log(num);
  if (num < 50) {
    break;
  }
  num--;
}

num = 54;
console.log("Run 3");
while (num > 25) {
  if (num < 50) {
    break;
  }
  console.log(num);
  num--;
}
