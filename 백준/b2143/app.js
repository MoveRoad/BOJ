const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().trim().split('\r\n');

const N = input.shift();

const A_Length = input.shift();
let A = input[0].split(' ').map(Number);
input.shift();
const B_Length = input.shift();
let B = input[0].split(' ').map(Number);

const A_sum = [];
for(let i=0; i<A_Length; i++){
    let idx = 0;
    for (let j=i; j<A_Length; j++){
        idx += A[j];
        A_sum.push(idx);
    }
}


const B_sum = {};
for(let i=0; i<B_Length; i++){
    let idx =0;
    for (let j=i; j<B_Length; j++){
        idx += B[j];
        if(idx in B_sum) B_sum[idx] += 1;
        else B_sum[idx] = 1;
    }
}

let cnt = 0;
for(let i=0; i<A_sum.length; i++){
    let target = N-A_sum[i];

    if(target in B_sum) cnt += B_sum[target];
}

console.log(cnt);