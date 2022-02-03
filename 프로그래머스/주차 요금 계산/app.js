function solution(fees, records) {
  let answer = [];

  const toMinute = (index) => {
    index = index.split(":").map(Number);
    return index[0] * 60 + index[1];
  };

  let carInfo = {};
  let allPkTime = {};

  records.map((el, i) => {
    let info = el.split(" ");
    if (info[2] === "IN") {
      carInfo[info[1]] = info[0];
    } else {
      const outTime = toMinute(info[0]);
      const inTime = toMinute(carInfo[info[1]]);
      const parkingTime = outTime - inTime;

      if (info[1] in allPkTime) {
        allPkTime[info[1]] += parkingTime;
      } else {
        allPkTime[info[1]] = parkingTime;
      }
      delete carInfo[info[1]];
    }
  });

  for (const i of Object.entries(carInfo)) {
    const lastTime = toMinute("23:59");
    const inTime = toMinute(i[1]);
    const parkingTime = lastTime - inTime;

    if (i[0] in allPkTime) {
      allPkTime[i[0]] += parkingTime;
    } else {
      allPkTime[i[0]] = parkingTime;
    }
  }

  allPkTime = Object.entries(allPkTime);

  allPkTime
    .sort((a, b) => a[0] - b[0])
    .map((el) => {
      const parkingTime =
        (el[1] - fees[0]) % fees[2] === 0
          ? Math.floor((el[1] - fees[0]) / fees[2])
          : Math.floor((el[1] - fees[0]) / fees[2]) + 1;

      if (parkingTime < 0) {
        answer.push(fees[1]);
      } else {
        answer.push(fees[1] + parkingTime * fees[3]);
      }
    });

  return answer;
}
