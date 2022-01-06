const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().trim().split('\r\n');

const N = input.shift();

for(let i=0; i<N; i++){
    let arr = [];
    let temp = input[i].split('');
    let status = true;

    for(let j=0; j<temp.length; j++){
        //console.log(temp[j]," ",arr);

        if(temp[j] === '(') arr.push(temp[j]);
        else if(temp[j] === ')'){
            if(arr.length>0) arr.pop();
            else{
                status = false;
                break;
            }
        }
    }

    if(arr.length>0) status = false;

    if(status === true) console.log("YES");
    else console.log("NO");
}