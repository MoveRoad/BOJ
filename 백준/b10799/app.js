const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().trim().split('\r\n');

input = input[0].split('');

let arr= [];
let cnt= 0;

for(let i=0; i<input.length; i++){
    if(input[i] === '(') arr.push(input[i]);
    else{
        if(input[i-1] === '('){
            arr.pop();
            cnt += arr.length;
        }else{
            arr.pop();
            cnt++;
        }
    }
}

console.log(cnt);