function solution(word) {
  let answer = 0;
  const alpha = ["A", "E", "I", "O", "U"];

  let alphabets = [];
  const back_tracking = (count, arr) => {
    if (count === 5) {
      return;
    }

    for (let i = 0; i < alpha.length; i++) {
      let temp = arr + alpha[i];
      alphabets.push(temp);
      back_tracking(count + 1, temp);
    }
  };

  back_tracking(0, "");

  return alphabets.indexOf(word) + 1;
}
