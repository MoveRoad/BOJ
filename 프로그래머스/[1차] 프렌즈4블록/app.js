function solution(m, n, board) {
  let answer = 0;
  let tempArr = [];

  for (let i = 0; i < m; i++) {
    board[i] = board[i].split("");
  }

  const tl = [
    [-1, -1],
    [-1, 0],
    [0, -1],
  ];
  const tr = [
    [-1, 0],
    [-1, 1],
    [0, 1],
  ];
  const ll = [
    [0, -1],
    [1, -1],
    [1, 0],
  ];
  const lr = [
    [0, 1],
    [1, 1],
    [1, 0],
  ];

  const searchtl = (y, x, arr) => {
    for (const d of tl) {
      const ny = y + d[0];
      const nx = x + d[1];

      if (ny < 0 || ny >= m || nx < 0 || nx >= n) return;

      if (board[ny][nx] !== 0 && board[ny][nx] === board[y][x])
        arr = [...arr, [ny, nx]];
      else return;
    }

    for (const a of arr) {
      tempArr.push(a);
    }
  };

  const searchtr = (y, x, arr) => {
    for (const d of tr) {
      const ny = y + d[0];
      const nx = x + d[1];

      if (ny < 0 || ny >= m || nx < 0 || nx >= n) return;

      if (board[ny][nx] !== 0 && board[ny][nx] === board[y][x])
        arr = [...arr, [ny, nx]];
      else return;
    }

    for (const a of arr) {
      tempArr.push(a);
    }
  };

  const searchll = (y, x, arr) => {
    for (const d of ll) {
      const ny = y + d[0];
      const nx = x + d[1];

      if (ny < 0 || ny >= m || nx < 0 || nx >= n) return;

      if (board[ny][nx] !== 0 && board[ny][nx] === board[y][x])
        arr = [...arr, [ny, nx]];
      else return;
    }

    for (const a of arr) {
      tempArr.push(a);
    }
  };

  const searchlr = (y, x, arr) => {
    for (const d of lr) {
      const ny = y + d[0];
      const nx = x + d[1];

      if (ny < 0 || ny >= m || nx < 0 || nx >= n) return;

      if (board[ny][nx] !== 0 && board[ny][nx] === board[y][x])
        arr = [...arr, [ny, nx]];
      else return;
    }

    for (const a of arr) {
      tempArr.push(a);
    }
  };

  while (true) {
    for (let i = 0; i < m; i++) {
      for (let j = 0; j < n; j++) {
        searchtl(i, j, [[i, j]]);
        searchtr(i, j, [[i, j]]);
        searchll(i, j, [[i, j]]);
        searchlr(i, j, [[i, j]]);
      }
    }

    if (tempArr.length === 0) {
      break;
    }

    tempArr = [...new Set(tempArr.join("|").split("|"))]
      .map((v) => v.split(","))
      .map((v) => v.map((a) => +a));

    for (const t of tempArr) {
      board[t[0]][t[1]] = 0;
    }

    for (let x = 0; x < n; x++) {
      for (let y = m - 1; y >= 0; y--) {
        if (board[y][x] === 0) {
          let ny = y;
          while (ny > 0) {
            ny--;

            if (board[ny][x] !== 0) {
              board[y][x] = board[ny][x];
              board[ny][x] = 0;
              break;
            }
          }
        }
      }
    }

    tempArr = [];
  }

  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (board[i][j] === 0) answer++;
    }
  }

  return answer;
}
