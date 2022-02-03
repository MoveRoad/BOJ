const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().split('\r\n');

let front = input[0].split('');
let back = [];
const num = Number(input[1]);
let textlength = front.length;
let arr = [];

for(let i=0; i<2+num; i++){
    arr.push(input[i].split(' '));
}

console.log(arr);

for(let i=2; i<2+num; i++){
    switch(arr[i][0]){
        case 'L':
            if(textlength>0){
                back.push(front.pop());
                textlength--;
            }
            break;
        case 'D':
            if(back.length > 0){
                front.push(back.pop());
                textlength++;
            }
            break;
        case 'B':
            if(textlength>0){
                front.pop();
                textlength--;
            }
            break;
        case 'P':
            front.push(arr[i][1]);
            textlength++;
            break;
    }
}

back.reverse();

console.log(front.join('')+back.join(''));