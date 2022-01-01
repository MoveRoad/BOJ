const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().split('\n');

//solution(input);
a=input[0].split(' ');
solution(a);

function solution(input){
    let a = input[0].split('').reverse().join('');
    let b = input[1].split('').reverse().join('');

    console.log(a > b ? a : b);
}