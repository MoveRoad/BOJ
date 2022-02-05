const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\r\n");

const boardLen = Number(input.shift());

// 뱀 = S , 길 = 0 , 사과 = A
let board = Array.from(Array(boardLen), () => new Array(boardLen).fill(0));

const appleLen = Number(input.shift());

for (let i = 0; i < appleLen; i++) {
  let temp = input[0].split(" ").map(Number);
  input.shift();

  board[temp[0] - 1][temp[1] - 1] = "A";
}

const operLen = Number(input.shift());

let operArr = [];

for (let i = 0; i < operLen; i++) {
  let temp = input[0].split(" ");
  input.shift();

  operArr.push([Number(temp[0]), temp[1]]);
}

board[0][0] = "S";
const dy = [-1, 1, 0, 0];
const dx = [0, 0, -1, 1];
let snakeDir = 3; //0~3 상하좌우
let [cy, cx] = [0, 0];
let cnt = 0;

let sLocation = [[0, 0]];

const dirConvert = (curDir, turnWhere) => {
  switch (curDir) {
    case 0:
      if (turnWhere === "D") return 3;
      else return 2;
    case 1:
      if (turnWhere === "D") return 2;
      else return 3;
    case 2:
      if (turnWhere === "D") return 0;
      else return 1;
    case 3:
      if (turnWhere === "D") return 1;
      else return 0;
  }
};

while (true) {
  // 이동 1, 벽이나 자기 몸이면 종료
  // 사과인지 아닌지 판단, 사과면 꼬리는 삭제 x
  // 사과가 아니면 꼬리 삭제 o
  // 방향 변화있는지 확인하고 바꿔주기
  cnt++;

  const ny = cy + dy[snakeDir];
  const nx = cx + dx[snakeDir];

  if (
    ny < 0 ||
    ny >= boardLen ||
    nx < 0 ||
    nx >= boardLen ||
    board[ny][nx] === "S"
  )
    break;

  if (board[ny][nx] === 0) {
    board[ny][nx] = "S";
    [cy, cx] = sLocation.shift();
    board[cy][cx] = 0;
  } else if (board[ny][nx] === "A") {
    board[ny][nx] = "S";
  }

  // 뱀 바뀐 위치 추가
  sLocation.push([ny, nx]);

  // 방향 전환
  if (operArr.length && cnt === operArr[0][0]) {
    let oper = operArr.shift();
    snakeDir = dirConvert(snakeDir, oper[1]);
  }

  cy = ny;
  cx = nx;
}

console.log(cnt);
