const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().split('\n');

input = input[0].split(' ');

solution(input[0], input[1]);

function solution(A, B){
    let a = Number(A);
    let b = Number(B);

    if (a>b) console.log('>')
    else if (a<b) console.log('<')
    else console.log('==')
}