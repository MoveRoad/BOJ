const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().split('\r\n');


const N = input[0];
const schedule = [];
const max = [];

for(let i=0;i<input[0];i++){
    schedule.push((input[i+1].split(' ')));
}

console.log(schedule);

// 시작
for(let i=0;i<input[0];i++){
    let index = Number(i);
    let sum = 0;
    for(let j=index;j<input[0];j=index){
        index += Number(schedule[j][0]);
        if(index<=input[0]){
            sum += Number(schedule[j][1]);
        }
        
    }
    max.push(sum);
}

console.log(max);

function solution(el, index, sum){
    if(el<input[0]) solution(el+1, index, sum);
    
    for(let i=el;i<input[0];i=el){
        index += Number(schedule[j][0]);
        if(index<=input[0])
    }
}