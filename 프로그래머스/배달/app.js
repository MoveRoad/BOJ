function solution(clothes) {
  let result = 1;
  let answer = {};

  for (let i of clothes) {
    if (answer[i[1]]) answer[i[1]]++;
    else answer[i[1]] = 1;
  }

  for (let i of Object.values(answer)) {
    result *= i + 1;
  }
  return result - 1;
}
