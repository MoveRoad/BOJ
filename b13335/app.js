const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().trim().split('\r\n');

const nbw = input[0].split(' ');
let truck = input[1].split(' ');
let onbridge = new Array(Number(nbw[1])).fill(0);
let weight = 0;
let time = 0;

while(onbridge.length>0){
    time += 1;
    let temp = onbridge.shift();
    weight -= temp;

    if(truck.length>0){
        if(weight+Number(truck[0])<=Number(nbw[2])){
            onbridge.push(Number(truck[0]));
            weight += Number(truck[0]);
            truck.shift();
        }else{
            onbridge.push(0);
        }
    }
}
console.log(time);