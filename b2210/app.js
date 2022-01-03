const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().trim().split('\r\n');

const tables = input.map(el=> el.split(' '));
let visited = Array.from(Array(tables.length), () => Array(tables.length).fill(0));
let arr = [];
const dy = [-1,1,0,0];
const dx = [0,0,-1,1];

for(let i=0; i< tables.length; i++){
    for(let j=0; j<tables.length; j++){
        dfs(0, i, j, '');
    }
}

const set = new Set(arr);
const setarr = [...set];
console.log(setarr.length);

function dfs(count/*재귀횟수*/, y, x, str){
    if(count==6){
        arr.push(str);
        return;
    }
    else{
        str += tables[y][x];

        for(let i=0; i<4; i++){
            ay = y+ dy[i];
            ax = x+ dx[i];

            if(ay<0 || ay>=tables.length || ax<0 || ax>=tables.length){
                continue;
            }

            dfs(count+1, ay, ax, str);
        }
    }
}