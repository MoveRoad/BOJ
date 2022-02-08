function solution(genres, plays) {
  let sumDic = {};
  let answer = [];
  genres.forEach((el, i) => {
    answer.push({ genres: el, count: plays[i], index: i });

    if (el in sumDic) {
      sumDic[el] += plays[i];
    } else sumDic[el] = plays[i];
  });

  answer.sort((a, b) => {
    if (a.genres !== b.genres) return sumDic[b.genres] - sumDic[a.genres];
    if (a.count !== b.count) return b.count - a.count;
  });

  let count = {};

  return answer
    .filter((el) => {
      if (count[el.genres] >= 2) return false;
      if (el.genres in count) count[el.genres] += 1;
      else count[el.genres] = 1;
      return true;
    })
    .map((el) => el.index);
}
