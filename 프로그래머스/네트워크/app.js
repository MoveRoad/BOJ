function solution(n, c) {
  var answer = 0;
  let dic = Array.from(Array(n), () => new Array(0));

  for (let i = 0; i < n; i++) {
    for (let j = i + 1; j < n; j++) {
      if (c[i][j] === 1) {
        dic[i].push(j);
        dic[j].push(i);
      }
    }
  }

  let visited = new Array(n).fill(false);

  const bfs = (idx) => {
    let queue = [idx];

    visited[idx] = true;

    while (queue.length) {
      idx = queue.shift();

      while (dic[idx].length) {
        let temp = dic[idx].shift();

        if (!visited[temp]) {
          queue.push(temp);
          visited[temp] = true;
        }
      }
    }
  };

  for (let i = 0; i < n; i++) {
    if (!visited[i]) {
      bfs(i);
      answer++;
    }
  }

  return answer;
}
