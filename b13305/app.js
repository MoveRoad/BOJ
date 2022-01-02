const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().trim().split('\r\n');

const N = input[0];
const road = input[1].split(' ');
const price = input[2].split(' ');
let oil = 0;
let money = road[i-1] * price[i-1];

console.log(road, price);

for(let i=1; i<N; i++){
    if(oil>0){
        oil= 
    }else{
        for(let j=i+1; j<N; j++){
            if(price[i]>=price[j]){
                oil += road[j-1];
                money += road[j-1] * price[j-1];
            }else{
                break;
            }
        }
    }
}