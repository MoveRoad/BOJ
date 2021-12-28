const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString();

solution(Number(input));

function solution(A){
    let a = A;

    for(let i=1;i<=9;i++){
        let idx = a * i;
        console.log(`${a} * ${i} = ${idx}`);
    }
}