const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\r\n");

let [y, x] = input[0].split(" ").map(Number);
input.shift();

let board = [];
input.forEach((el) => board.push(el.split(" ").map(Number)));

console.log(board);
for (let i = 0; i < y; i++) {
  let visited = new Array(y).fill(false);
  for (let j = 0; j < y - 1; j++) {
    let cur = board[i][j];
    let next = board[i][j + 1];

    let check = true;

    // 다음 길이 높아지면(1칸 차이면)
    // cur부터 앞에 x개까지 cur 높이와 같은지 판단
    // 만약 앞에 x까지 판단하러 가다가 테두리 밖이면 버리기
    if (cur === next - 1) {
      for (let c = j; c > j - x + 2; j--) {
        if (c - x < 0 || board[i][c] !== board[i][c - 1] || visited[c]) {
          check = false;
          break;
        }
        visited[c] = true;
      }
    }

    if (!check) break;

    console.log(`올라가는건 성공 , hereis= ${j}`);
  }
}
