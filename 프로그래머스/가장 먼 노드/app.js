function solution(n, vertex) {
  let answer = [];
  const graph = Array.from(Array(n + 1), () => new Array());

  for (const el of vertex) {
    graph[el[0]].push(el[1]);
    graph[el[1]].push(el[0]);
  }

  const bfs = (start, count) => {
    let queue = [[start, count]];
    let visited = new Array(n + 1).fill(false);
    visited[1] = true;

    while (queue.length) {
      let [next, count] = queue.shift();

      for (const t of graph[next]) {
        if (!visited[t]) {
          queue.push([t, count + 1]);
          visited[t] = true;
        }
      }

      answer.push(count);
    }
  };

  bfs(1, 0);

  return answer.reduce((a, c) => (c === Math.max(...answer) ? a + 1 : a));
}
