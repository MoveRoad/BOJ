const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().trim().split('\r\n');

input = input[0].split('');
let arr = [];
let front = 0;
let answer = new Array(20).fill(0);

for(let i in input){
    if(input[i] === ')'){
        let temp = "";
        while(true){
            let index = arr.pop();
            
            if(index === '('){
                let number = arr.pop();
                answer[front] = answer[front] + (answer[front+1]+temp.length) * number;
                answer[front+1] = 0;

                break;
            }else{
                temp += index;
            }
        }
        front--;
    }else if(input[i] === '('){
        arr.push(input[i]);
        front++;
    }else arr.push(input[i]);

}

console.log(arr.length+answer[1]);