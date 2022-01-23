const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\r\n");

function dfs(idx, cnt) {
  if (cnt >= 2) return;

  for (let i = 0; i < arr[idx].length; i++) {
    let temp = arr[idx][i];
    visited.add(temp);
    dfs(temp, cnt + 1);
  }
}

let N = Number(input.shift());
let M = Number(input.shift());
let arr = Array.from(Array(M + 1), () => new Array(0));
let visited = new Set();
visited.add(1);

for (let i of input) {
  let temp = i.split(" ").map(Number);
  arr[temp[0]].push(temp[1]);
  arr[temp[1]].push(temp[0]);
}

dfs(1, 0);
console.log(visited.size - 1);
