const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\r\n");

const dy = [-1, 1, 0, 0];
const dx = [0, 0, -1, 1];

const Breakice = (y, x, array) => {
  let queue = [[y, x]];
  let visited = Array.from(Array(Y), () => Array(X).fill(false));

  while (queue.length > 0) {
    let [ay, ax] = queue.shift();
    visited[ay][ax] = true;

    for (let i = 0; i < 4; i++) {
      let ty = ay + dy[i];
      let tx = ax + dx[i];

      if (ty < 0 || ty >= Y || tx < 0 || tx >= X) continue;

      if (!visited[ty][tx] && array[ty][tx] === ".") {
        lake[ay][ax] = ".";
      }
    }
  }
};

const Whiteswan = (y, x, array) => {
  let queue = [[y, x]];
  let visited = Array.from(Array(Y), () => Array(X).fill(false));

  while (queue.length > 0) {
    let [ay, ax] = queue.shift();
    visited[ay][ax] = true;

    for (let i = 0; i < 4; i++) {
      let ty = ay + dy[i];
      let tx = ax + dx[i];

      if (ty < 0 || ty >= Y || tx < 0 || tx >= X) continue;

      if (!visited[ty][tx] && array[ty][tx] === "L") {
        //console.log(`L은? = ${visited[0][1]} 현재 큐 = ${queue} 현재 위치 = ${ay}, ${ax},  다음 위치 = ${ty},${tx}`);
        return false;
      }

      if (!visited[ty][tx] && array[ty][tx] === ".") {
        queue.push([ty, tx]);
        //console.log(`L은? = ${visited[0][1]} 현재 큐 = ${queue} 현재 위치 = ${ay}, ${ax},  다음 위치 = ${ty},${tx}`);
      }
    }
  }
};

const [Y, X] = input[0].split(" ").map(Number);
input.shift();

let lake = [];
let cnt = 0;

// 호수 담기
for (let i = 0; i < Y; i++) {
  lake.push([...input[i]]);
}

while (true) {
  cnt++;
  let lakeCopy = JSON.parse(JSON.stringify(lake));
  // 호수 하나씩 탐색
  for (let i = 0; i < Y; i++) {
    for (let j = 0; j < X; j++) {
      if (lake[i][j] === "L") {
        //백조의 탐색
        let check = Whiteswan(i, j, lakeCopy);
        if (check === false) {
          console.log(cnt - 1);
          return;
        }
      } else if (lake[i][j] === "X") {
        //얼음 녹이기
        Breakice(i, j, lakeCopy);
      }
    }
  }
  //console.log(lake);
}
