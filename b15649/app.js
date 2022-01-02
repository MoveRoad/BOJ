const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().trim().split('\n');

const NM = input[0].split(' ');
let visited = new Array(Number(NM[0])).fill(0);
let arr = [];


dfs(0);


function dfs(count/*재귀횟수*/){
    if(count === Number(NM[1])){
        console.log(arr.join(' '));
        return;
    }

    for(let i=0;i<NM[0];i++){
        //console.log(`i = ${i}, arr = ${arr}, count = ${count}, visited= ${visited}`);
        if(visited[i] !== 1){
            visited[i] = 1;
            arr.push(i+1);

            dfs(count+1);

            arr.pop();
            visited[i] = 0;
        }
    }
}
