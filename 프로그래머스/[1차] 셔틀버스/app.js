function solution(n, t, m, timetable) {
  let answer = "";

  let bustime = [];

  for (let i = 0; i < n; i++) {
    bustime.push(540 + i * t);
  }

  const convertTime = (clock) => {
    let temp = clock.split(":").map(Number);
    return temp[0] * 60 + temp[1];
  };

  const convertClock = (time) => {
    let Hour = String(Math.floor(time / 60));
    let Minute = String(time % 60);
    let str = Hour.padStart(2, "0") + ":" + Minute.padStart(2, "0");
    return str;
  };

  timetable.map((el, i) => (timetable[i] = convertTime(el)));
  timetable.sort((a, b) => a - b);

  bustime.forEach((el, i) => {
    if (i === bustime.length - 1) {
      if (m <= timetable.length) {
        if (el < timetable[m - 1]) answer = el;
        else answer = timetable[m - 1] - 1;
      } else {
        answer = el;
      }
    } else {
      for (let j = 0; j < m; j++) {
        if (el < timetable[0] || timetable.length === 0) break;
        timetable.shift();
      }
    }
  });

  return convertClock(answer);
}
