const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().trim().split('\r\n');

const T = Number(input.shift());

const binary_search = (arr, data) => {
    let low = 0;
    let high = arr.length-1;
    let result = -1;
    
    while (low<=high){
        let mid = Math.floor((low+high)/2);

        if(arr[mid] < data){
            result = mid;
            low = mid+1;
        }else{
            high = mid-1;
        }
    }

    return result
}

for(let i=0; i<T; i++){
    input.shift();
    
    let A = input[0].split(' ').map(el => Number(el));
    input.shift();
    let B = input[0].split(' ').map(el => Number(el));
    input.shift();

    answer = 0;
    B.sort((a, b) => a - b);

    for(let i of A){
        answer += (binary_search(B, i)+1);
    }

    console.log(answer);
}