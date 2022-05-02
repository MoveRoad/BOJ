function solution(lines) {
  let answer = 0;
  const array = [];
  let count = 0;

  const changeTimes = (h, m, s, mili, gap) => {
    const time =
      (Number(h) * 3600 + Number(m) * 60 + Number(s)) * 1000 + Number(mili);

    array.push([time - Number(gap) * 1000 + 1, "start"]);
    array.push([time + 1000, "end"]);
  };

  for (const line of lines) {
    const [_, times, gap] = line.split(" ");
    const [h, m, sLine] = times.split(":");
    const [s, mili] = sLine.split(".");

    changeTimes(h, m, s, mili, gap.slice(0, -1));

    array.sort((a, b) => a[0] - b[0]);
  }

  for (const temp of array) {
    if (temp[1] === "start") {
      count += 1;
    } else count -= 1;

    answer = Math.max(answer, count);
  }

  return answer;
}
