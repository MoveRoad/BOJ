function solution(s) {
  const answer = [s[0]];

  for (let i = 1; i < s.length; i++) {
    if (s[i] === answer[answer.length - 1]) {
      answer.pop();
      continue;
    }

    answer.push(s[i]);
  }

  return answer.length === 0 ? 1 : 0;
}
