const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\r\n");

const comb = (count, originArr, inArr) => {
  if (count === 0) {
    combArr.push(...[inArr.join(" ")]);
    return;
  }

  for (let i = 0; i < originArr.length; i++) {
    let temp = [];
    temp = originArr.slice(i);

    inArr.push(originArr[i]);

    comb(count - 1, temp, inArr);
    inArr.pop();
  }
};

let [arrLen, M] = input[0].split(" ").map(Number);
let origin = [];
for (let i = 0; i < arrLen; i++) {
  origin.push(i + 1);
}

let combArr = [];
comb(M, origin, []);

console.log(combArr.join("\n"));
