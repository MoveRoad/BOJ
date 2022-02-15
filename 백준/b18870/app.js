const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

let array = input[1].split(" ").map(Number);
let sortArr = [...array].sort((a, b) => a - b);
let setArr = {};
let cnt = 0;

sortArr.forEach((el) => {
  if (!(el in setArr)) {
    setArr[el] = cnt;
    cnt++;
  }
});

console.log(array.map((el) => setArr[el]).join(" "));
