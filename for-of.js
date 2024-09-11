const numbers = [12, 98, 45, 63, 21, 72];

console.log("Run 1");
console.log(numbers);

for (const num of numbers) {
  console.log(num);
}

const removed1 = numbers.pop();
const removed2 = numbers.pop();
const removed3 = numbers.pop();

console.log("Run 2");
console.log(numbers);

for (const num of numbers) {
  console.log(num);
}

numbers.push(removed3, removed2, removed1);
numbers.push(52, 81, 19);
console.log("Run 3");
console.log(numbers);

for (const num of numbers) {
  console.log(num);
}

const fruits = ["orange", "apple", "banana", "jackfruit", "watermelon"];
for (const fruit of fruits) {
  console.log("I want to eat " + fruit);
}
