function solution(k, dungeons) {
  let answer = -1;
  let visited = new Array(dungeons.length).fill(false);

  const bfs = (k, count) => {
    answer = Math.max(answer, count);

    for (let i = 0; i < dungeons.length; i++) {
      const [minNeed, consume] = dungeons[i];

      if (k >= minNeed && !visited[i]) {
        visited[i] = true;
        bfs(k - consume, count + 1);
        visited[i] = false;
      }
    }
  };

  bfs(k, 0);
  return answer;
}
