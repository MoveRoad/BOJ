function solution(jobs) {
  let minHeap = [[null, null]];

  const swap = (a, b) => {
    [minHeap[a], minHeap[b]] = [minHeap[b], minHeap[a]];
  };

  const heappush = (data) => {
    minHeap.push(data);

    let curIdx = minHeap.length - 1;
    let parIdx = Math.floor(curIdx / 2);

    while (curIdx > 1 && minHeap[curIdx][1] < minHeap[parIdx][1]) {
      swap(curIdx, parIdx);

      curIdx = parIdx;
      parIdx = Math.floor(curIdx / 2);
    }
  };

  const heappop = () => {
    const min = minHeap[1];

    if (minHeap.length <= 2) minHeap = [[null, null]];
    else minHeap[1] = minHeap.pop();

    let curIdx = 1;
    let leftIdx = curIdx * 2;
    let rightIdx = curIdx * 2 + 1;

    if (!minHeap[leftIdx]) return min;

    if (!minHeap[rightIdx]) {
      if (minHeap[leftIdx][1] < minHeap[curIdx][1]) swap(leftIdx, curIdx);
      return min;
    }

    while (
      (minHeap[leftIdx] && minHeap[leftIdx][1] < minHeap[curIdx][1]) ||
      (minHeap[rightIdx] && minHeap[rightIdx][1] < minHeap[curIdx][1])
    ) {
      const l = minHeap[leftIdx] ? minHeap[leftIdx][1] : 0;
      const r = minHeap[rightIdx] ? minHeap[rightIdx][1] : 0;
      const minIdx = l > r ? rightIdx : leftIdx;

      swap(minIdx, curIdx);

      curIdx = minIdx;
      leftIdx = curIdx * 2;
      rightIdx = curIdx * 2 + 1;
    }

    return min;
  };

  let queue = [];
  let answer = 0;
  let timer = 0;
  const jobsLen = jobs.length;
  jobs.sort((a, b) => {
    if (a[0] === b[0]) return a[1] - b[1];
    else return a[0] - b[0];
  });

  while (jobs.length || minHeap.length > 1) {
    while (jobs.length && jobs[0][0] <= timer) {
      heappush(jobs.shift());
    }

    if (minHeap.length <= 1) {
      const newTime = jobs[0][0];
      while (jobs.length && jobs[0][0] === newTime) {
        minHeap.push(jobs.shift());
      }

      timer = newTime;
    }

    if (minHeap.length > 2) {
      const done = heappop();

      console.log(timer, done);
      timer += done[1];
      answer += timer - done[0];
    }
  }

  return Math.floor(answer / jobsLen);
}

console.log(
  solution([
    [24, 10],
    [28, 39],
    [43, 20],
    [37, 5],
    [47, 22],
    [20, 47],
    [15, 34],
    [15, 2],
    [35, 43],
    [26, 1],
  ])
);
