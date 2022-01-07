const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().trim().split('\r\n');

const N = input.reduce((a, c) => Number(a) + Number(c), 0);

for(let i=0; i< input.length-1; i++){
    for(let j=i+1; j<input.length; j++){
        if((N-Number(input[i])-Number(input[j])) === 100){
            input.splice(i, 1);
            input.splice(j-1, 1);
        }
    }
}

input.sort((a, b) => Number(a) - Number(b));
for(let i of input){
    console.log(i); 
}