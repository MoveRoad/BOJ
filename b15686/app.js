const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\r\n");

const dy = [-1, 1, 0, 0];
const dx = [0, 0, -1, 1];

const dfs = (y, x) => {
  let queue = [[y, x]];
  let visited = Array.from(Array(infoCity), () => new Array(infoCity).fill(0));
  let cnt = 0;

  while (queue.length > 0) {
    let [ty, tx] = queue.shift();
    visited[ty][tx] = 1;
    cnt += 1;

    for (let i = 0; i < 4; i++) {
      ty = y + dy[i];
      tx = x + dx[i];

      if (ty < 0 || ty >= infoCity || tx < 0 || tx >= infoCity) continue;

      if (visited[ty][tx] === 0 && input[ty][tx] === "0") {
        queue.push([ty, tx]);
      }

      if (input[ty][tx] === "1") return cnt;
    }
  }

  return 0;
};

const [infoCity, leaveChicken] = input[0].split(" ").map(Number);
input.shift();

for (let i = 0; i < input.length; i++) {
  input[i] = input[i].split(" ");
}

let answer = 0;

for (let i = 0; i < infoCity; i++) {
  for (let j = 0; j < infoCity; j++) {
    if (input[i][j] === "1") {
      //console.log(`i = ${i}, j = ${j}, input = ${input[i][j]}`);
      answer += dfs(i, j);
    }
  }
}

console.log(answer);
