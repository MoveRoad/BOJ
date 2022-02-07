const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\r\n");

const dy = [-1, 1, 0, 0];
const dx = [0, 0, -1, 1];

const [by, bx] = input[0].split(" ").map(Number);
let visited = Array.from(Array(by), () =>
  Array.from(Array(bx), () => new Array(2).fill(0))
);
input.shift();
input.map((el, i) => (input[i] = el.split("")));

const bfs = (cy, cx, breakCnt) => {
  visited[cy][cx][breakCnt] = 1;
  let queue = [[cy, cx, breakCnt]];
  let idx = 0;

  while (idx !== queue.length) {
    [cy, cx, breakCnt] = queue[idx++];

    if (cy === by - 1 && cx === bx - 1) {
      console.log(visited[cy][cx][breakCnt]);
      return;
    }

    for (let i = 0; i < 4; i++) {
      let [ny, nx] = [cy + dy[i], cx + dx[i]];

      if (ny < 0 || ny >= by || nx < 0 || nx >= bx) continue;

      if (visited[ny][nx][breakCnt] === 0) {
        if (input[ny][nx] === "0") {
          visited[ny][nx][breakCnt] = visited[cy][cx][breakCnt] + 1;
          queue.push([ny, nx, breakCnt]);
        } else {
          if (breakCnt === 0) {
            // 만약 벽이고 벽을 안부시고 왔다면
            visited[ny][nx][breakCnt + 1] = visited[cy][cx][breakCnt] + 1;
            queue.push([ny, nx, breakCnt + 1]);
          }
        }
      }
    }
  }

  console.log(-1);
};

bfs(0, 0, 0);
