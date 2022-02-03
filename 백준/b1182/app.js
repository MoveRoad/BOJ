const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\r\n");

const comb = (count, originArr, inArr) => {
  if (count === -1) return;

  if (inArr.length >= 1) {
    if (inArr.reduce((a, b) => a + b) === target) cnt++;
  }

  for (let i = 0; i < originArr.length; i++) {
    let temp = [];
    temp = originArr.slice(i + 1);

    inArr.push(originArr[i]);
    comb(count - 1, temp, inArr);
    inArr.pop();
  }
};

let [arrLen, target] = input.shift().split(" ").map(Number);
let origin = input[0].split(" ").map(Number);
let cnt = 0;

comb(arrLen, origin, []);

console.log(cnt);
