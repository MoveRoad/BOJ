const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\r\n");

const [N, L, R] = input[0].split(" ").map(Number);
const array = [];
let moveCount = 0;

for (let i = 0; i < N; i++) {
  array.push(input[i + 1].split(" ").map(Number));
}

const dy = [-1, 1, 0, 0];
const dx = [0, 0, -1, 1];
let locations = [];
let groupValue = [];
let group = 0;

/* bfs가 도착한 부분 값 다 더한 후 (y, x, 그룹넘버) */
const bfs = (y, x, visited) => {
  let queue = [[y, x]];
  visited[y][x] = true;
  let sum = array[y][x];
  let count = 1;
  let loc = [];

  while (queue.length) {
    const [y, x] = queue.shift();
    loc.push([y, x, group]);

    for (let i = 0; i < 4; i++) {
      const ny = y + dy[i];
      const nx = x + dx[i];

      if (ny < 0 || ny >= N || nx < 0 || nx >= N) continue;

      const value = Math.abs(array[y][x] - array[ny][nx]);

      if (!visited[ny][nx] && value >= L && value <= R) {
        queue.push([ny, nx]);
        sum += array[ny][nx];
        count++;
        visited[ny][nx] = true;
      }
    }
  }

  if (loc.length > 1) {
    for (const d of loc) {
      locations.push(d);
    }
  }

  if (count > 1) {
    groupValue.push(Math.floor(sum / count));
    group++;
  }
};

while (true) {
  let visited = Array.from(Array(N), () => new Array(N).fill(false));
  locations = [];
  groupValue = [];
  group = 0;

  for (let i = 0; i < N; i++) {
    for (let j = 0; j < N; j++) {
      if (!visited[i][j]) {
        bfs(i, j, visited);
      }
    }
  }

  if (locations.length === 0) {
    console.log(moveCount);
    break;
  }

  while (locations.length) {
    const [y, x, l] = locations.pop();

    array[y][x] = groupValue[l];
  }

  moveCount++;
}
