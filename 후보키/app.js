function solution(relation) {
  let answer = 0;
  let arr = [];

  const combination = (array, count, list) => {
    if (count === 0) {
      arr.push([...array]);
      return;
    }

    for (let i = 0; i < list.length; i++) {
      let temp = list.slice(i + 1);

      array.push(list[i]);
      combination(array, count - 1, temp);
      array.pop();
    }

    return;
  };

  combination([], 1, relation);

  console.log(arr);

  return answer;
}

solution([
  ["100", "ryan", "music", "2"],
  ["200", "apeach", "math", "2"],
  ["300", "tube", "computer", "3"],
  ["400", "con", "computer", "4"],
  ["500", "muzi", "music", "3"],
  ["600", "apeach", "music", "2"],
]);
