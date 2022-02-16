const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().split("\r\n");

const X = input[0];
const Y = input[1];

if (X > 0) {
  console.log(Y > 0 ? 1 : 4);
} else {
  console.log(Y > 0 ? 2 : 3);
}
