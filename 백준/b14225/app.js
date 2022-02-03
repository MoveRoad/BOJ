const fs = require('fs');
const { deflateSync } = require('zlib');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().trim().split('\r\n');

let tables = new Array(2000001).fill(false);

const N = Number(input.shift());
const S = input[0].split(' ').map(Number);

const dfs = (idx, sum, arr) => {
    if(idx == N){
        tables[sum] = true;
        return;
    }

    dfs(idx+1, sum+arr[idx], arr);
    dfs(idx+1, sum, arr);
}

dfs(0, 0, S);

for(let i=1; i<tables.length; i++){
    if(!tables[i]){
        console.log(i);
        break;
    }
}