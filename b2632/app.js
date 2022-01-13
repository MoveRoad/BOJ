const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().trim().split('\r\n');

function leftSum(arr){
    let sum = [];
    for(let i=0; i<arr.length; i++){
        // 맨왼쪽 피자부터 누적합 구하기
        let acc = 0;
        for(let j=i; j<i+left; j++){
            let temp = j % left;
            acc += arr[temp];
            sum.push(acc);
        }
        //console.log(sum);
    }

    return sum;
}

function rightSum(arr){
    let sum = [];
    for(let i=0; i<arr.length; i++){
        // 맨왼쪽 피자부터 누적합 구하기
        let acc = 0;
        for(let j=i; j<i+right; j++){
            let temp = j % right;
            acc += arr[temp];
            sum.push(acc);
        }
        //console.log(sum);
    }

    return sum;
}

function binary_search(t, arr){
    let low = 0;
    let high = arr.length-1;

    while(low<=high){
        let mid = Math.floor((high+low)/2);

        if(arr[mid] === t) return true;
        else if(arr[mid] < t){
            low= mid+1;
        }else{
            high= mid-1;
        }
    }

    return false;
}

const target = Number(input[0]);
const [left, right] = input[1].split(' ').map(Number);
const pizzaLeft = [];
const pizzaRight = [];

for(let i=2; i<input.length; i++){
    if(i<2+left){
        pizzaLeft.push(Number(input[i]));
    }else{
        pizzaRight.push(Number(input[i]));
    }
}

let leftAcc = leftSum(pizzaLeft);
let rightAcc = rightSum(pizzaRight);

rightAcc.sort((a, b)=> a-b);

let cnt = 0;
for(let i of leftAcc){
    if(i === target) {
        console.log(`leftAcc ! i = ${i}, target = ${target}`);
        cnt++;
        continue;
    }
    if(binary_search(target-i, rightAcc) === true){
        console.log(`leftAcc ! i = ${i}, target = ${target-i}`);
        cnt++;
    }
}

for(let i of rightAcc){
    if(i === target) {
        cnt++;
        console.log(`rightAcc ! i = ${i}, target = ${target}`);
    }
}

console.log(cnt);