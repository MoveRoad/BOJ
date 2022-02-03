const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\r\n");

let [N, P, Q] = input[0].split(" ").map(Number);

let savedArr = {};
savedArr[0] = 1;

const solution = (index) => {
  if (index < 0) {
    return;
  }

  const left = Math.floor(index / P);
  const right = Math.floor(index / Q);
  let first = 0;
  let second = 0;

  if (left in savedArr) {
    first = savedArr[left];
  } else first = solution(left);

  if (right in savedArr) {
    second = savedArr[right];
  } else second = solution(right);

  savedArr[index] = first + second;
  return savedArr[index];
};

if (N !== 0) solution(N);

console.log(savedArr[N]);
