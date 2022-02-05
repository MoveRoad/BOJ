function solution(N, road, K) {
  let bridge = Array.from(Array(N + 1), () => new Array(0));
  let visited = new Array(N + 1).fill(Infinity);
  visited[1] = 0;

  road.forEach((el, i) => {
    bridge[el[0]].push([el[1], el[2]]);
    bridge[el[1]].push([el[0], el[2]]);
  });

  // bfs를 이용해 각 정점으로 탐색
  // 만약 다음 정점으로 가는 다양한 간선들이 있을텐데
  // 얘네가 전부 거쳐오면서 정점까지의 거리가 visited에 저장될텐데
  // 이 저장된 값이 내가 방금 탐색하고온 곳 보다 크면
  // 작은 값으로 바꿔줌
  const bfs = (edge, sum) => {
    let queue = [[edge, sum]];

    while (queue.length) {
      [edge, sum] = queue.shift();

      for (let i = 0; i < bridge[edge].length; i++) {
        const next = bridge[edge][i][0];
        const nextLen = bridge[edge][i][1];

        if (visited[next] > visited[edge] + nextLen) {
          visited[next] = visited[edge] + nextLen;
          queue.push([next, nextLen]);
        }
      }
    }
  };

  bfs(1, 0);

  return visited.filter((el) => el <= K).length;
}
