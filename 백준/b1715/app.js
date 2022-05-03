const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().split("\r\n");
let heap = [null];

const swap = (a, b) => {
  [heap[a], heap[b]] = [heap[b], heap[a]];
};

const heappush = (value) => {
  heap.push(value);

  let curIdx = heap.length - 1;
  let parIdx = (curIdx / 2) >> 0;

  while (curIdx > 1 && heap[curIdx] < heap[parIdx]) {
    swap(curIdx, parIdx);

    curIdx = parIdx;
    parIdx = (curIdx / 2) >> 0;
  }
};

const heappop = () => {
  const min = heap[1];

  if (heap.length <= 2) heap = [null];
  else heap[1] = heap.pop();

  let [curIdx, leftIdx, rightIdx] = [1, 2, 3];

  if (!heap[leftIdx]) return min;

  if (!heap[rightIdx]) {
    if (heap[curIdx] > heap[leftIdx]) swap(curIdx, leftIdx);
    return min;
  }

  while (heap[curIdx] > heap[leftIdx] || heap[curIdx] > heap[rightIdx]) {
    const minIdx = heap[leftIdx] > heap[rightIdx] ? rightIdx : leftIdx;

    swap(minIdx, curIdx);

    curIdx = minIdx;
    leftIdx = curIdx * 2;
    rightIdx = curIdx * 2 + 1;
  }

  return min;
};

const N = Number(input[0]);
let sumAmount = 0;

for (let i = 1; i < N + 1; i++) {
  heappush(Number(input[i]));
}

while (heap.length > 2) {
  const amount = heappop() + heappop();

  heappush(amount);
  sumAmount += amount;
}

console.log(sumAmount);
