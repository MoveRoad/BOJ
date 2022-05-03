function solution(operations) {
  let minHeap = [null];
  let maxHeap = [null];

  const swap = (m, a, b) => {
    if (m === "min") {
      [minHeap[a], minHeap[b]] = [minHeap[b], minHeap[a]];
      return;
    }

    [maxHeap[a], maxHeap[b]] = [maxHeap[b], maxHeap[a]];
  };

  const minHeapPush = (value) => {
    minHeap.push(value);
    let curIdx = minHeap.length - 1;
    let parIdx = (curIdx / 2) >> 0;

    while (curIdx > 1 && minHeap[curIdx] < minHeap[parIdx]) {
      swap("min", curIdx, parIdx);

      curIdx = parIdx;
      parIdx = (curIdx / 2) >> 0;
    }
  };

  const maxHeapPush = (value) => {
    maxHeap.push(value);
    let curIdx = maxHeap.length - 1;
    let parIdx = (curIdx / 2) >> 0;

    while (curIdx > 1 && maxHeap[curIdx] > maxHeap[parIdx]) {
      swap("max", curIdx, parIdx);

      curIdx = parIdx;
      parIdx = (curIdx / 2) >> 0;
    }
  };

  const minPop = () => {
    let min = minHeap[1];
    if (minHeap.length <= 2) minHeap = [null];
    else minHeap[1] = minHeap.pop();

    let curIdx = 1;
    let leftIdx = 2;
    let rightIdx = 3;

    if (!minHeap[leftIdx]) return min;

    if (!minHeap[rightIdx]) {
      if (minHeap[leftIdx] < minHeap[curIdx]) swap("min", leftIdx, curIdx);
      return min;
    }

    while (
      minHeap[curIdx] > minHeap[leftIdx] ||
      minHeap[curIdx] > minHeap[rightIdx]
    ) {
      const minIdx = minHeap[leftIdx] > minHeap[rightIdx] ? rightIdx : leftIdx;

      swap("min", minIdx, curIdx);

      curIdx = minIdx;
      leftIdx = curIdx * 2;
      rightIdx = curIdx * 2 + 1;
    }

    return min;
  };

  const maxPop = () => {
    let min = maxHeap[1];
    if (maxHeap.length <= 2) maxHeap = [null];
    else maxHeap[1] = maxHeap.pop();

    let curIdx = 1;
    let leftIdx = 2;
    let rightIdx = 3;

    if (!maxHeap[leftIdx]) return min;

    if (!maxHeap[rightIdx]) {
      if (maxHeap[leftIdx] > maxHeap[curIdx]) swap("max", leftIdx, curIdx);
      return min;
    }

    while (
      maxHeap[curIdx] < maxHeap[leftIdx] ||
      maxHeap[curIdx] < maxHeap[rightIdx]
    ) {
      const minIdx = maxHeap[leftIdx] < maxHeap[rightIdx] ? rightIdx : leftIdx;

      swap("max", minIdx, curIdx);

      curIdx = minIdx;
      leftIdx = curIdx * 2;
      rightIdx = curIdx * 2 + 1;
    }

    return min;
  };

  for (const data of operations) {
    const [oper, num] = data.split(" ");

    switch (oper) {
      case "I":
        minHeapPush(Number(num));
        maxHeapPush(Number(num));
        break;
      case "D":
        if (num === "1") {
          maxPop();
          if (minHeap.length === 1) break;
          minHeap.pop();
        } else {
          minPop();
          if (maxHeap.length === 1) break;
          maxHeap.pop();
        }
        break;
    }
    console.log(oper, maxHeap, minHeap);
  }

  return minHeap.length <= 1 ? [0, 0] : [maxHeap[1], minHeap[1]];
}
