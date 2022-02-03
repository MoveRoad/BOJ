const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().split("\n");

let N = Number(input.shift());

for (let i = 0; i < N; i++) {
  let P = Number(input.shift());
  let dp = [1, 1, 1];
  answer = 0;

  if (P <= 3) {
    answer = dp[P - 1];
  } else {
    for (let j = 3; j < P; j++) {
      dp[j] = dp[j - 3] + dp[j - 2];
    }

    answer = dp[P - 1];
  }

  console.log(answer);
}
