function solution(survey, choices) {
  // 1번 R,T 2번 C,F 3번 J,M 4번 A,N
  let answer = "";
  let dic = { R: 0, C: 0, J: 0, A: 0, T: 0, F: 0, M: 0, N: 0 };

  choices.forEach((el, idx) => {
    if (el >= 5) {
      dic[survey[idx][1]] += el - 4;
    } else if (el <= 3) {
      dic[survey[idx][0]] += 4 - el;
    }
  });

  if (dic["R"] >= dic["T"]) {
    answer += "R";
  } else answer += "T";

  if (dic["C"] >= dic["F"]) {
    answer += "C";
  } else answer += "F";

  if (dic["J"] >= dic["M"]) {
    answer += "J";
  } else answer += "M";

  if (dic["A"] >= dic["N"]) {
    answer += "A";
  } else answer += "N";

  return answer;
}
