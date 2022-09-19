function solution(survey, choices) {
  const type = ["RT", "CF", "JM", "AN"];

  let MBTI = {};

  for (const t of type) t.split("").forEach((el) => (MBTI[el] = 0));

  for (let i = 0; i < survey.length; i++) {
    const [left, right] = survey[i].split("");

    MBTI[choices[i] > 4 ? right : left] += Math.abs(choices[i] - 4);
  }

  console.log(MBTI);

  return type.map((el) => (MBTI[el[1]] > MBTI[el[0]] ? el[1] : el[0])).join("");
}
