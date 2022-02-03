const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().split('\r\n');

input.shift();
let arr = [...new Set(input)].sort((a, b) => a.length - b.length || a.localeCompare(b));

console.log(arr);
for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
}