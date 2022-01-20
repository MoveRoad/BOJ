const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

let N = input.shift();

let queue = input.split(" ").map(Number);

let curLocation = 0;
let dir = queue.shift();

curLocation += dir;
if (curLocation < 0) {
  curLocation = queue.length + curLocation;
} else {
  curLocation = curLocation % N;
}

while (queue.length > 0) {
  let temp = queue[curLocation];

  curLocation += temp;
  if (curLocation < 0) {
    curLocation = queue.length + curLocation;
  } else {
    curLocation = curLocation % N;
  }

  queue.splice(curLocation, 1);
}
