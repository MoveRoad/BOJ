const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\r\n");

const N = Number(input.shift());

const bfsFire = (y, x) => {
    let queue =[[y, x]];
    let visited =
}

for (let i = 0; i < N; i++) {
  let [x, y] = input[0].split(" ").map(Number);

  let building = [];

  for (let j = 0; j < y; j++) {
    building.push(input[j].split(""));
  }

  const fire = [];
  const sg = [];

  building.forEach((yEl, y) => {
    yEl.forEach((xEl, x) => {
      if (xEl === "*") fire.push([y, x]);
      else if (xEl === "@") sg.push([y, x]);
    });
  });

  

  input.splice(0, 4);
}
