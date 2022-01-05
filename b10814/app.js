const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().trim().split('\r\n');

input.shift();
let temp = [];
for(let i=0; i<input.length; i++){
    temp.push(input[i].split(' '));
}

temp.sort((a, b) => a[0] - b[0]);

for(let i=0; i<temp.length; i++){
    console.log(temp[i][0]+" "+temp[i][1]);
}