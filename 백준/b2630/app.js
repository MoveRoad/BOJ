const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let [N, ...input] = fs.readFileSync(filePath).toString().trim().split("\r\n");

N = Number(N);

for (const [idx, el] of input.entries()) {
  input[idx] = el.split(" ").map(Number);
}

let white = 0;
let blue = 0;

const dfs = (N, sy, sx, ey, ex) => {
  let amount = 0;

  for (let i = sy; i < ey; i++) {
    for (let j = sx; j < ex; j++) {
      if (input[i][j] === 0) amount++;
    }
  }

  if (amount === 0) {
    white++;
    return;
  } else if (amount === N * N) {
    blue++;
    return;
  }

  dfs(N / 2, sy, sx, ey / 2, ex / 2);
  dfs(N / 2, sy, ex / 2, ey / 2, ex);
  dfs(N / 2, ey / 2, sx, ey, ex / 2);
  dfs(N / 2, ey / 2, ex / 2, ey, ex);
};

dfs(N, 0, 0, N, N);

console.log(white, blue);
