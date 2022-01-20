const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\r\n");

const selectChicken = (cnt, curIdx, arr, permu) => {
  if (cnt === leaveChicken) {
    console.log(arr);
    permu.push(arr);
    return;
  }

  for (let i = curIdx; i < leaveChicken; i++) {
    if (visited[i] === 1) continue;

    arr.push(leaveChicken[i + 1]);
    selectChicken(cnt + 1, curIdx, arr, permu);
    arr.pop();
    visited[i] === 0;
  }
};

const [N, leaveChicken] = input[0].split(" ").map(Number);
input.shift();
let arr = [];
let permu = [];
let visited = new Array(leaveChicken).fill(0);

let cityInfo = [];

input.map((el) => {
  cityInfo.push(el.split(" ").map(Number));
});

let ChickenLocation = [];

cityInfo.map((el, i) => {
  el.map((inner, j) => {
    if (inner === 2) ChickenLocation.push([i, j]);
  });
});

for (let i = 0; i < leaveChicken; i++) {
  visited[i] = 1;
  arr.push(leaveChicken[i]);
  selectChicken(0, i, arr, permu);
  arr.pop();
}

console.log(permu);
