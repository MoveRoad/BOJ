const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().trim().split('\r\n');

const getMin = (idx, arr) => {
    let leftChild = (cur*2)+1;
    let rightChild = (cur*2)+2;

    if(idx >= arr.length) return;
    if(rightChild)
}