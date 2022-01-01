const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().trim().split('\n');

const NM = input[0].split(" ");

for(let i=0;i<NM[0];i++){
    dfs(NM[i]);
}

function dfs(M){
    let check = new Array(NM[0]).fill(0);

    console.log(check);

}
