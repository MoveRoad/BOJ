let heap = [null];

const swap = (a, b) => {
  [heap[a], heap[b]] = [heap[b], heap[a]];
};

const heapPush = ([target, value]) => {
  heap.push([target, value]);
  let curIdx = heap.length - 1;
  let parIdx = (curIdx / 2) >> 0;

  while (curIdx > 1 && heap[parIdx][1] > heap[curIdx][1]) {
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
    if (heap[leftIdx][1] < heap[curIdx][1]) {
      swap(leftIdx, curIdx);
    }
    return min;
  }

  // 최소한 자식 2개 이상은 가지고 있는 경우
  while (
    (heap[leftIdx] && heap[leftIdx][1] < heap[curIdx][1]) ||
    (heap[rightIdx] && heap[rightIdx][1] < heap[curIdx][1])
  ) {
    if (!heap[leftIdx]) break;

    if (!heap[rightIdx]) {
      if (heap[leftIdx][1] < heap[curIdx][1]) {
        swap(leftIdx, curIdx);
      }
      break;
    }
    const minIdx = heap[leftIdx][1] > heap[rightIdx][1] ? rightIdx : leftIdx;

    swap(curIdx, minIdx);
    curIdx = minIdx;
    leftIdx = curIdx * 2;
    rightIdx = curIdx * 2 + 1;
  }

  return min;
};

function solution(n, paths, gates, summits) {
  var answer = [];
  const graph = Array.from(Array(n + 1), () => new Array());

  paths.forEach((el) => {
    graph[el[0]].push([el[1], el[2]]);
    graph[el[1]].push([el[0], el[2]]);
  });

  const priority_search = (start, intensity) => {
    const queue = [[start, intensity]];
    let visited = new Array(n + 1).fill(false);
    visited[start] = true;

    while (queue.length) {
      const [now, intensity] = queue.shift();

      for (const c of graph[now]) {
        let [next, nextInten] = [c[0], c[1]];
        console.log(now, next, nextInten, "heap = ", heap);

        if (summits.indexOf(next) >= 0) {
          nextInten = intensity < nextInten ? nextInten : intensity;
          console.log("summit = ", next, nextInten);
          answer.push([next, nextInten]);
          continue;
        }

        if (gates.indexOf(next) >= 0) {
          continue;
        }

        if (!visited[next]) {
          nextInten = intensity < nextInten ? nextInten : intensity;
          heapPush([next, nextInten]);
        }
      }

      console.log("뽑기전 heap = ", heap);
      const p = heapPop();
      if (p === undefined) continue;
      visited[p[0]] = true;
      queue.push(p);
    }
  };

  for (const g of gates) {
    priority_search(g, 0);
  }

  console.log(answer);
  return answer.sort((a, b) => {
    if (a[1] === b[1]) return a[0] - b[0];
    return a[1] - b[1];
  })[0];
}

solution(
  7,
  [
    [1, 4, 4],
    [1, 6, 1],
    [1, 7, 3],
    [2, 5, 2],
    [3, 7, 4],
    [5, 6, 6],
  ],
  [1],
  [2, 3, 4]
);
