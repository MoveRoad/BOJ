const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\r\n");

const [N, M] = input[0].split(" ").map(Number);
let board = [];
let groupSize = [];
let answer = [];

for (let i = 1; i < N + 1; i++) {
  board.push(input[i].split(" ").map(Number));
}

let visited = Array.from(Array(N), () => new Array(M).fill(false));
const dy = [-1, 1, 0, 0];
const dx = [0, 0, -1, 1];

const bfs = (y, x, groups) => {
  let cnt = 0;
  let queue = [[y, x]];
  visited[y][x] = true;
  board[y][x] = groups;

  while (queue.length) {
    [y, x] = queue.shift();
    cnt++;

    for (let i = 0; i < 4; i++) {
      let ny = y + dy[i];
      let nx = x + dx[i];

      if (ny < 0 || ny >= N || nx < 0 || nx >= M) continue;

      if (!visited[ny][nx] && board[ny][nx] === 1) {
        queue.push([ny, nx]);
        board[ny][nx] = groups;
        visited[ny][nx] = true;
      }
    }
  }

  return cnt;
};

let count = 1;
for (let i = 0; i < N; i++) {
  for (let j = 0; j < M; j++) {
    if (board[i][j] === 1 && !visited[i][j]) {
      groupSize.push(bfs(i, j, count));
      count += 1;
    }
  }
}

const fourWay = (y, x, temp) => {
  for (let i = 0; i < 4; i++) {
    let ny = y + dy[i];
    let nx = x + dx[i];

    if (ny < 0 || ny >= N || nx < 0 || nx >= M) continue;

    if (board[ny][nx] !== 0) {
      temp.add(board[ny][nx]);
    }
  }
};

for (let i = 0; i < N; i++) {
  for (let j = 0; j < M; j++) {
    if (board[i][j] === 0) {
      let temp = new Set();
      let sum = 0;
      fourWay(i, j, temp);
      temp.forEach((el) => {
        sum += groupSize[el - 1];
      });
      answer.push(sum + 1);
    }
  }
}

console.log(Math.max(...answer));
