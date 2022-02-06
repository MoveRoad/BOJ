const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\r\n");

const N = Number(input.shift());

for (let i = 0; i < N; i++) {
  let answer = "IMPOSSIBLE";
  let sgCount = 0;
  let fireCount = 0;

  const [x, y] = input[0].split(" ").map(Number);
  let board = [];
  input.shift();

  for (let j = 0; j < y; j++) {
    board.push(input[0].split(""));
    input.shift();
  }

  let fire = [];
  let sg = [];

  for (let iy = 0; iy < y; iy++) {
    for (let ix = 0; ix < x; ix++) {
      if (board[iy][ix] === "*") {
        fire.push([iy, ix]);
      } else if (board[iy][ix] === "@") {
        sg.push([iy, ix, 0]);
      }
    }
  }

  const dy = [-1, 1, 0, 0];
  const dx = [0, 0, -1, 1];

  const bfs_sg = () => {
    sgCount = sg.length;

    while (sgCount--) {
      let [cy, cx, cnt] = sg.shift();

      for (let i = 0; i < 4; i++) {
        let ny = cy + dy[i];
        let nx = cx + dx[i];

        if (ny < 0 || ny >= y || nx < 0 || nx >= x) continue;

        if (
          board[ny][nx] === "." &&
          (ny === 0 || ny === y - 1 || nx === 0 || nx === x - 1)
        ) {
          answer = cnt + 2;
          return;
        }

        if (board[ny][nx] === ".") {
          sg.push([ny, nx, cnt + 1]);
          board[ny][nx] = "@";
        }
      }
    }
  };

  const bfs_fire = () => {
    fireCount = fire.length;

    while (fireCount--) {
      let [cy, cx] = fire.shift();

      for (let i = 0; i < 4; i++) {
        let ny = cy + dy[i];
        let nx = cx + dx[i];

        if (ny < 0 || ny >= y || nx < 0 || nx >= x) continue;

        if (board[ny][nx] === "." || board[ny][nx] === "@") {
          fire.push([ny, nx]);
          board[ny][nx] = "*";
        }
      }
    }
  };

  while (true) {
    bfs_fire();
    bfs_sg();

    if (sg.length === 0) {
      break;
    }
  }

  console.log(answer);
}
