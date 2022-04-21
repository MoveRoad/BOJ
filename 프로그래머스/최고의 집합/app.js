function solution(n, s) {
  const middleValue = Math.floor(s / n);

  if (middleValue === 0) return [-1];

  const upCaseCount = s % n;
  let answer = new Array(n).fill(middleValue);

  for (let i = 0; i < upCaseCount; i++) {
    answer[answer.length - 1 - i]++;
  }
  return answer;
}
