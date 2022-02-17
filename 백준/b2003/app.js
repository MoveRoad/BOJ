const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

let left = 0;
let right = 0;

let [N, target] = input[0].split(" ").map(Number);
const array = input[1].split(" ").map(Number);

let sum = 0;
let count = 0;
while (right <= N) {
  if (sum <= target) {
    sum += array[right++];
  } else {
    sum -= array[left++];
  }

  if (sum === target) {
    count++;
  }
}

console.log(count);
