const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = fs.readFileSync(filePath).toString().trim().split('\r\n');

const lower_bound = (target,array) => {
    let low = 0;
    let high = array.length-1;

    while(low<=high){
        let mid = Math.floor((low+high)/2);

        if(array[mid] === target){
            while(array[mid] === target) mid--;

            return mid+1;
        }

        if(array[mid] < target) low = mid+1;
        else high = mid-1;
    }

    return 0;
}

const upper_bound = (target,array) => {
    let low = 0;
    let high = array.length-1;

    while(low<=high){
        let mid = Math.floor((low+high)/2);

        if(array[mid] === target){
            while(array[mid] === target) mid++;

            return mid-1;
        }

        if(array[mid] < target) low = mid+1;
        else high = mid-1;
    }

    return 0;
}

const N = input.shift();
let [A, B, C, D] = [[], [], [], []];

for(let i=0; i<N; i++){
    let [ta, tb, tc, td] = input[i].split(' ').map(Number);
    A.push(ta);
    B.push(tb);
    C.push(tc);
    D.push(td);
}

/* A, B 합 */
let AB = [];
for(let i=0; i<N; i++){
    for(let j=0; j<N; j++){
        AB.push(A[i]+B[j]);
    }
}

/* C, D 합 */
let CD = [];
for(let i=0; i<N; i++){
    for(let j=0; j<N; j++){
        CD.push(C[i]+D[j]);
    }
}

CD.sort((a, b)=> a-b);
let cnt = 0;
for(let i=0; i<AB.length; i++){
    //console.log(AB[i]);
    let temp = 0-(AB[i]);

    //console.log(temp, upper_bound(temp, CD), lower_bound(temp, CD))
    let min = lower_bound(temp, CD);
    let max = upper_bound(temp, CD);

    let result = max-min+1;

    if(CD[min] === temp) cnt += result;
}
console.log(cnt);
