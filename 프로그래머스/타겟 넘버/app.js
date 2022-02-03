function solution(numbers, target) {
  let answer = 0;

  const operCall = {
    "+": (a, b) => a + b,
    "-": (a, b) => a - b,
  };

  // 연산자 만들 갯수
  const numberLen = numbers.length;

  const operate = ["+", "-"];

  let operators = [];
  const comb = (cnt, arr) => {
    if (cnt === numberLen) {
      operators.push([...arr]);
      return;
    }

    for (let i = 0; i < operate.length; i++) {
      comb(cnt + 1, [...arr, operate[i]]);
    }
  };

  comb(0, []);
  let cnt = 0;

  for (let i = 0; i < operators.length; i++) {
    let temp = [...numbers];
    if (operators[i][0] === "-") temp[0] = -temp[0];

    for (let j = 1; j < numberLen; j++) {
      temp[j] = operCall[operators[i][j]](temp[j - 1], temp[j]);
    }

    if (temp[numberLen - 1] === target) cnt++;
  }

  return cnt;
}
