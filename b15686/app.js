const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\r\n");

let [N, M] = input[0].split(" ").map(Number);
input.shift();

let city = [];
for (let i of input) {
  city.push(i.split(" ").map(Number));
}

let house = [];
let chicken = [];

for (let i = 0; i < N; i++) {
  for (let j = 0; j < N; j++) {
    if (city[i][j] === 1) house.push([i, j]);
    else if (city[i][j] === 2) chicken.push([i, j]);
  }
}

// chicken 들을 조합으로 M개 만큼 뽑기
let chickenList = [];
let visited = new Array(chicken.length).fill(false);

const comb = (count, array, cur) => {
  if (count === M) {
    chickenList.push([...array]);
    return;
  }

  for (let i = cur; i < chicken.length; i++) {
    comb(count + 1, [...array, chicken[i]], cur + 1);
  }
};

if (M < chicken.length) comb(0, [], 0);
else chickenList = [[...chicken]];

// house 좌표랑 조합으로 뽑힌 chickenList들을 탐색하면서
let answer = Number.MAX_SAFE_INTEGER;
for (let i = 0; i < chickenList.length; i++) {
  let result = 0;
  // 집을 기준으로 각 치킨집까지의 거리
  for (let j = 0; j < house.length; j++) {
    let minList = Number.MAX_SAFE_INTEGER;
    // 각 치킨집까지의 거리
    for (let k = 0; k < M; k++) {
      let y = Math.abs(house[j][0] - chickenList[i][k][0]);
      let x = Math.abs(house[j][1] - chickenList[i][k][1]);

      minList = Math.min(minList, y + x);
    }
    result += minList;
  }
  answer = Math.min(answer, result);
}

console.log(answer);
