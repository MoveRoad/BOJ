const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\r\n");

for (let i = 0; i < input.length; i += 2) {
  let N = input[i]; // 안씀

  let array = input[i + 1].trim().split(/\s+/g).map(Number);
  let temp = [];

  const lower_bound = (target, array) => {
    let low = 0;
    let high = array.length - 1;

    while (low <= high) {
      let mid = Math.floor((low + high) / 2);

      if (array[mid] === target) {
        while (array[mid] === target) mid--;

        return mid + 1;
      }

      if (array[mid] < target) low = mid + 1;
      else high = mid - 1;
    }

    return low;
  };

  array.forEach((el) => {
    if (el > (temp[temp.length - 1] || 0)) {
      // 이번 값이 전 값 보다 클때
      temp.push(el);
    } else {
      // temp 값 중에 바꿔줄 수 있는 값 찾기
      let location = lower_bound(el, temp);
      temp[location] = el;
    }
    console.log(temp);
  });

  console.log(temp.length);
}
