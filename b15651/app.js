const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().trim().split('\n');

const NM = input[0].split(' ').map(Number);
let arr = [];
let answer = "";
//let visited = new Array(Number(NM[0])).fill(0);

dfs(0);
console.log(answer.trim());

function dfs(count/*재귀횟수*/){
    if(count === Number(NM[1])){
        answer += `${arr.join(' ')}\n`;
        return;
    }

    for(let i=0;i<NM[0];i++){
        arr.push(i+1);
        dfs(count + 1);
        arr.pop();
    }
}

