const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\r\n");

function toAC() {
  // 현재 앞 - 뒤 모드
  let curMode = "front";

  // 1번째 명령어
  const opCode = input.shift();
  // 2번째 배열 수
  const arrLen = input.shift();
  // 3번째 배열
  let arr = input[0]
    .slice(1, input[0].length - 1)
    .split(",")
    .map(Number);
  input.shift();

  if (arr.length === 1 && arr[0] === 0) arr.pop();

  for (let oper of opCode) {
    if (oper == "R") {
      curMode = curMode === "front" ? "back" : "front";
    } else if (oper == "D") {
      if (arr.length === 0) {
        console.log("error");
        return;
      }

      if (curMode === "front") {
        arr.shift();
      } else arr.pop();
    }
  }

  if (curMode === "back") {
    arr.reverse();
  }
  console.log(`[${arr}]`);
}

const N = Number(input.shift());

for (let i = 0; i < N; i++) {
  toAC();
}
