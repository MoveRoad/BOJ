const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\r\n");

input = Number(input.shift());

const dy = [-1, 1, 0, 0];
const dx = [0, 0, -1, 1];

const bfs = (y, x) => {
  let queue = [[y, x]];

  while (queue.length > 0) {
    [y, x] = queue.shift();

    for (let i = 0; i < 4; i++) {
      const nY = y + dy[i];
      const nX = x + dx[i];

      if (
        nY < 0 ||
        nY >= boardLen ||
        nX < 0 ||
        nX >= boardLen ||
        board[nY][nX] === 1
      )
        continue;

      const bill = dir === i ? money + 100 : money + 600;
      if (board[nY][nX] === 0 || board[nY][nX] >= bill) {
        board[nY][nX] = bill;
        queue.push([nY, nX, i, bill]);
      }
    }
  }

  return board[boardLen - 1][boardLen - 1] - 500;
};
