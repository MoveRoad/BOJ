const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().trim().split('\r\n');

let N = Number(input.shift());

let answer = [];

for(let i=0; i<N; i++){
    if(Number(input[i]) === 0) {
        answer.pop();
        continue;
    }

    answer.push(Number(input[i]));
}

console.log(answer.reduce((a, c) => a+c,0));