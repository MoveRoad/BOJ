const { reverse } = require('dns');
const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().trim().split('\r\n');

let first_card = input[1].split(' ');
let second_card = input[3].split(' ');
let answer = [];

first_card.sort();

for(let i of second_card){
    answer.push(binarysearch(i, first_card));
}

console.log(answer.join(" "));

function binarysearch(target, array){
    let low = 0;
    let high = array.length-1;

    while(low<=high){
        let mid = Math.floor((low+high)/2);
        
        if(array[mid] === target){
            return 1;
        }else if(array[mid] > target){
            high = mid-1;
        }else{
            low = mid+1;
        }
    }

    return 0;
}