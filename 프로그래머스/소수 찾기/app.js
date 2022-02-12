function solution(numbers) {
  let answer = 0;

  // 백트래킹에 011과 11 그리고 순서가 반대인 11 다 기록되기 때문에
  // 중복을 제거해주기 위해 Set을 이용합니다.
  let temp = new Set();
  let visited = new Array(numbers.length).fill(false);

  const dfs = (cnt, arr) => {
    if (cnt === numbers.length) {
      return;
    }

    for (let i = 0; i < numbers.length; i++) {
      if (!visited[i]) {
        visited[i] = true;
        let str = arr + numbers[i];
        dfs(cnt + 1, str);
        temp.add(Number(str));
        visited[i] = false;
      }
    }
  };

  dfs(0, "");

  const sosu = (idx) => {
    if (idx === 2) return true;

    for (let i = 2; i <= Math.sqrt(idx); i++) {
      if (idx % i === 0) {
        return false;
      }
    }
    return true;
  };
  temp.forEach((el) => {
    if (sosu(el)) answer++;
  });

  return answer;
}
