const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\r\n");

const N = Number(input.shift());
let graph = Array.from(Array(N + 1), () => new Array(0));

const [a, b] = input[0].split(" ").map(Number);
const graphLen = Number(input[1]);

for (let i = 2; i < 2 + graphLen; i++) {
  const [start, end] = input[i].split(" ").map(Number);

  graph[start].push(end);
  graph[end].push(start);
}

const bfs = (idx, cnt) => {
  let queue = [[idx, cnt]];
  let visited = new Array(N + 1).fill(false);

  while (queue.length) {
    [idx, cnt] = queue.shift();
    visited[idx] = true;

    while (graph[idx].length) {
      let temp = graph[idx].pop();
      if (temp === b) return cnt + 1;

      queue.push([temp, cnt + 1]);
    }
  }

  return -1;
};

console.log(bfs(a, 0));
