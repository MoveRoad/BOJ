const fs = require("fs");
const { resourceLimits } = require("worker_threads");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\r\n");

let [N, M] = input[0].split(" ").map(Number);

let dicArr = input[1].split(" ");
dicArr.sort(); // 오름차순용 정렬
let visited = new Array(M).fill(false);

let tempArr = [];

const backTracking = (count, cur, arr) => {
  if (count == N) {
    let consonant = 0;
    let gather = 0;
    for (let i = 0; i < arr.length; i++) {
      if (
        arr[i] === "a" ||
        arr[i] === "e" ||
        arr[i] === "u" ||
        arr[i] === "i" ||
        arr[i] === "o"
      )
        gather++;
      else consonant++;
    }

    if (gather >= 1 && consonant >= 2) tempArr.push([...arr]);
    return;
  }

  for (let i = cur; i < dicArr.length; i++) {
    if (!visited[i]) {
      visited[i] = true;
      arr.push(dicArr[i]);
      backTracking(count + 1, i, arr);
      arr.pop();
      visited[i] = false;
    }
  }
};

backTracking(0, 0, []);

tempArr.sort();
tempArr.map((el) => console.log(el.join("")));
