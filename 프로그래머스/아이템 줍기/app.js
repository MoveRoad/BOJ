function solution(rectangle, characterX, characterY, itemX, itemY) {
  let answer = [];
  let board = Array.from(Array(101), () => new Array(101).fill(0));

  rectangle.forEach((el, i) => {
    const yStart = el[1] * 2;
    const yEnd = el[3] * 2;
    const xStart = el[0] * 2;
    const xEnd = el[2] * 2;

    for (let y = yStart; y <= yEnd; y++) {
      for (let x = xStart; x <= xEnd; x++) {
        if (y === yStart || y === yEnd || x === xStart || x === xEnd) {
          if (board[y][x] === 1) continue;
          else board[y][x] += 1;
        } else board[y][x] = 2;
      }
    }
  });

  const dy = [-1, 1, 0, 0];
  const dx = [0, 0, -1, 1];

  const bfs = (y, x, cnt) => {
    let queue = [[y, x, cnt]];
    let visited = Array.from(Array(101), () => new Array(101).fill(false));

    while (queue.length) {
      [y, x, cnt] = queue.shift();
      visited[y][x] = true;

      if (y === itemY * 2 && x === itemX * 2) return cnt / 2;

      for (let i = 0; i < 4; i++) {
        let ny = y + dy[i];
        let nx = x + dx[i];

        if (ny < 0 || ny >= 101 || nx < 0 || nx >= 101) continue;

        if (!visited[ny][nx] && board[ny][nx] === 1) {
          queue.push([ny, nx, cnt + 1]);
        }
      }
    }
  };

  return bfs(characterY * 2, characterX * 2, 0);
}
