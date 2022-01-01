const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().split('\r\n');
const getCombinations = function(arr, selectNumber){
    const results = [];
    if (selectNumber===1) return arr.map((value) => [value]);

    arr.forEach((fixed, index, origin) => {
        const rest = origin.slice(index +1);
        const combinations = getCombinations(rest, selectNumber-1);
        const attached = combinations.map((combination) => [fixed, ...combination]);
        results.push(...attached);
    });

    return results;
}


let a = input[0].split(' ');
let b = input[1].split(" ").map(el => parseInt(el));

//console.log(a, b);

let last_point = 0;

for (let i=0; i<a[0]; i++){
    for (let j=i+1; j<a[0]; j++){
        for (let k=j+1; k<a[0]; k++){
            const sum = b[i] + b[j] + b[k];
            
            if(sum<a[1] && sum>last_point){
                last_point = sum;
            }else if(sum==a[1]){
                last_point = sum;
                break;
            }
        }
    }
}

console.log(last_point);