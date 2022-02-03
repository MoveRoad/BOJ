const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().trim().split('\r\n');

for(let i in input){
    let temp = input[i].split('');
    let arr = [];
    let cnt = 0;

    if(temp[0] === '-') break;

    for(let j in temp){
        if(temp[j] === '{'){
            arr.push(temp[j]);
        }
        else{
            if(arr[arr.length-1] === '{'){
                arr.pop(temp[j]);
            }
            else{
                arr.push(temp[j]);
            }
        }
    }
    
    while(arr.length){
        let index = arr.pop();

        if(index === arr[arr.length-1]){
            arr.pop();
            cnt += 1;
        }else{
            arr.pop();
            cnt += 2;
        }
    }

    console.log(Number(i)+1+'. '+cnt);
}