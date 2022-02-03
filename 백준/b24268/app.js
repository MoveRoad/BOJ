const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\r\n");

let [N, M] = input[0].split(" ").map(Number);
let combArr = [];
let visited = new Array(M).fill(false);
let answer = [];

const comb = (cnt, arr) => {
  if (cnt === M) {
    if (arr[0] === "0") return;
    combArr.push(arr);
    return;
  }

  for (let i = 0; i < M; i++) {
    if (!visited[i]) {
      visited[i] = true;
      comb(cnt + 1, arr + i);
      visited[i] = false;
    }
  }
};

comb(0, "");

combArr.forEach((el) => {
  let temp = 0;

  for (let j = 0; j < M; j++) {
    temp += el[j] * M ** (M - 1 - j);
  }

  answer.push(temp);
});

console.log(answer.find((el) => el > N) || -1);
