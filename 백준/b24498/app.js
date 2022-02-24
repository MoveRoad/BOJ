const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

const N = input[0];
const block = input[1].split(" ").map(Number);

const answer = [block[0], block[block.length - 1]];
for (let i = 1; i < block.length - 1; i++) {
  answer.push(Math.min(block[i - 1], block[i + 1]) + block[i]);
}

console.log(Math.max(...answer));
