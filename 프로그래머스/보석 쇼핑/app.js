function solution(gems) {
  let answer = [];

  const gemCount = new Set(gems).size;
  let gemMap = new Map();
  gems.map((el, i) => {
    gemMap.delete(el);
    gemMap.set(el, i);

    if (gemMap.size === gemCount) {
      answer.push([gemMap.values().next().value + 1, i + 1]);
    }
  });

  answer.sort((a, b) => {
    if (a[0] - a[1] < b[0] - b[1]) return 1;
    else if (a[0] - a[1] === b[0] - b[1]) {
      return a[0] - b[0];
    } else return -1;
  });

  return answer[0];
}
