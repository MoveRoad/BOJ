const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().split('\r\n');

const wh = input.map(el => el.split(' ').map(num => parseInt(num)));
const answer = [];

for(let i=0; i<wh[0]; i++){
    let cnt = 0;
    for(let j=0; j<wh[0]; j++){
        if(wh[i+1][0] < wh[j+1][0] && wh[i+1][1] < wh[j+1][1]){
            cnt++;
        }
    }
    answer.push(cnt+1);
}

console.log(answer.join(' '));