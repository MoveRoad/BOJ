function solution(rectangle, characterX, characterY, itemX, itemY) {
  let answer = 0;
  let board = Array.from(Array(11), () => new Array(11).fill(0));

  rectangle.forEach((el, i) => {
    for (let y = el[1]; y <= el[3]; y++) {
      board[y][el[0]] = 1;
      board[y][el[2]] = 1;
    }

    for (let x = el[0]; x <= el[2]; x++) {
      board[el[1]][x] = 1;
      board[el[3]][x] = 1;
    }
  });
  console.log(board);
  return answer;
}

solution(
  [
    [1, 1, 7, 4],
    [3, 2, 5, 5],
    [4, 3, 6, 9],
    [2, 6, 8, 8],
  ],
  1,
  3,
  7,
  8,
  17
);
