const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\r\n");

const operObj = {
  "+": (oper1, oper2) => oper1 + oper2,
  "-": (oper1, oper2) => oper1 - oper2,
  "*": (oper1, oper2) => oper1 * oper2,
  "/": (oper1, oper2) => {
    if (oper1 < 0) {
      return -Math.floor(-oper1 / oper2);
    }
    return Math.floor(oper1 / oper2);
  },
};

const comb = (count) => {
  if (count === 0) {
    tempOperate.push([...inArr]);
    return;
  }

  for (let i = 0; i < operator.length; i++) {
    if (visited[i] === 0) {
      visited[i] = 1;
      inArr.push(operator[i]);
      comb(count - 1);
      inArr.pop();
      visited[i] = 0;
    }
  }
};

let N = Number(input.shift());
let numArr = input[0].split(" ").map(Number);
let [plus, minus, multiple, divide] = input[1].split(" ").map(Number);
let operator = [];
for (let i = 0; i < plus; i++) {
  operator.push("+");
}
for (let i = 0; i < minus; i++) {
  operator.push("-");
}
for (let i = 0; i < multiple; i++) {
  operator.push("*");
}
for (let i = 0; i < divide; i++) {
  operator.push("/");
}

let tempOperate = [];
let inArr = [];
let visited = new Array(N - 1).fill(0);

comb(N - 1);

let result = [];
for (let i = 0; i < tempOperate.length; i++) {
  let copyNumArr = [...numArr];
  for (let j = 0; j < N - 1; j++) {
    copyNumArr[j + 1] = operObj[tempOperate[i][j]](
      copyNumArr[j],
      copyNumArr[j + 1]
    );
  }

  let temp = copyNumArr[copyNumArr.length - 1];

  result.push(temp);
}

console.log(`${Math.max(...result)}
${Math.min(...result)}`);
