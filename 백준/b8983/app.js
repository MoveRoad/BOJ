const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().trim().split('\r\n');

const lower_bound = (target, arr) => {
    let low = 0;
    let high = arr.length-1;

    while(low < high){
        let mid = Math.floor((low+high)/2);
        if(arr[mid]<target) low = mid+1;
        else high = mid;
    }

    return high;
}

const [shotsCount, animalsCount, RangeCount] = input[0].split(' ').map(Number);
const shot = input[1].split(' ');
const animals = [];

shot.sort((a, b) => a-b); // 1 4 6 9

for(let i=2; i<Number(animalsCount)+2; i++){
    animals.push(input[i].split(' ').map(Number));
}

let cnt = 0;

for(let i of animals){
    if(i[1]-RangeCount>0) continue;

    let minRange = i[0] - Math.abs(i[1]-RangeCount); // 최소
    let maxRange = i[0] + Math.abs(i[1]-RangeCount); // 최대
    
    let temp = shot[lower_bound(minRange, shot)];

    if(temp<=maxRange){
        cnt++;
        console.log(`i = ${i} min = ${minRange}, max = ${maxRange}, temp = ${temp}, cnt = ${cnt}`);
    }

    // console.log("min",minRange);
    // console.log(lower_bound(minRange, shot));
}

console.log(cnt);