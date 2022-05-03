let heap = [null];

const swap = (a, b) => {
  [heap[a], heap[b]] = [heap[b], heap[a]];
};

//최소 힙 기준에서의 설명
const heapPush = (value) => {
  heap.push(value);
  let curIdx = heap.length - 1;
  let parIdx = (curIdx / 2) >> 0; // Math.floor()

  while (curIdx > 1 && heap[parIdx] > heap[curIdx]) {
    swap(curIdx, parIdx);

    curIdx = parIdx;
    parIdx = (curIdx / 2) >> 0;
  }
};

const heapPop = () => {
  /* [1]번이 루트이므로 꺼낼 루트를 저장한 후
  재 정렬을 위한 마지막 원소를 pop하면서 [1]에 저장 */
  const min = heap[1];

  if (heap.length <= 2) heap = [null];
  else heap[1] = heap.pop();

  // 루트 꺼내고, 맨 마지막 원소를 루트로 옮기고 나서는
  let [curIdx, leftIdx, rightIdx] = [1, 2, 3];

  // 부모부터 시작해서 왼쪽 루트가 없으면 위치를 바꿀게 없음
  if (!heap[leftIdx]) return min;

  // 오른쪽 없이 왼쪽만 있다는 것은 1번, 2번만 교체해주면 된다.
  if (!heap[rightIdx]) {
    if (heap[leftIdx] < heap[curIdx]) {
      swap(leftIdx, curIdx);
    }
    return min;
  }

  // 최소한 자식 2개 이상은 가지고 있는 경우
  while (heap[leftIdx] < heap[curIdx] || heap[rightIdx] < heap[curIdx]) {
    const minIdx = heap[leftIdx] > heap[rightIdx] ? rightIdx : leftIdx;
    swap(curIdx, minIdx);

    curIdx = minIdx;
    leftIdx = curIdx * 2;
    rightIdx = curIdx * 2 + 1;
  }

  return min;
};
