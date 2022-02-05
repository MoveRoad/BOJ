function solution(brown, yellow) {
  var answer = [];

  let round = (brown - 4) / 2;
  // brown = 24 일때
  // round = 10 그리고 각 조합 1 9, 2 8, 3 7, 4 6, 5 5

  for (let i = 1; i <= round / 2; i++) {
    let temp = round - i;

    if (yellow === i * temp) answer.push([temp + 2, i + 2]);
  }

  return answer[0];
}
