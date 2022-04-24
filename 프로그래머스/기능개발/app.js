function solution(progresses, speeds) {
  let answer = {};
  let maxValue = 0;
  progresses.map((el, idx) => {
    const need =
      (100 - el) % speeds[idx] === 0
        ? (100 - el) / speeds[idx]
        : Math.floor((100 - el) / speeds[idx]) + 1;
    maxValue = Math.max(maxValue, need);

    answer[maxValue] = (answer[maxValue] || 0) + 1;
  });

  return Object.values(answer);
}
