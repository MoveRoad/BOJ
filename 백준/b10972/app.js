const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\r\n");

const N = Number(input.shift());
let array = [];
for (let i = 0; i < N; i++) {
  array.push(i + 1);
}

let combArr = [];

const comb = (count, originArr, inArr) => {
  if (count === 0) {
    combArr.push([...inArr]);
    return;
  }

  for (let i = 0; i < originArr.length; i++) {
    let temp = [];
    temp = temp.concat(
      originArr.slice(0, i),
      originArr.slice(i + 1, originArr.length)
    );

    inArr.push(originArr[i]);

    comb(count - 1, temp, inArr);
    inArr.pop();
  }
};

comb(N, array, []);

let temp = input[0].split(" ").map(Number);

combArr.map((el, i) => {
  if (JSON.stringify(el) === JSON.stringify(temp)) {
    if (i === combArr.length - 1) console.log(-1);
    else console.log(combArr[i + 1].join(" "));
  }
});
