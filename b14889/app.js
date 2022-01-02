const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().trim().split('\r\n');

const N = input.shift();
const half = Math.floor(N/2);
let table = [];

for(let i=0;i<N;i++){
    table.push(input.shift());
    let temp = table[i].split(' ').map(Number);
    table[i] = temp;
}

console.log(half);
function dfs(deeper, count, x){
}