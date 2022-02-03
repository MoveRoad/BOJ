const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().trim().split('\r\n');

input.shift();

input.sort((a, b) => {
    if (a.length != b.length) return a.length - b.length;
    let sum1 = sum(a),
        sum2 = sum(b);
    if (sum1 == sum2) return a.localeCompare(b);
    return sum1 - sum2;
});

console.log(input.join('\n'));

function sum(str){
    return str.match(/[\d]/g)?.reduce((a, c) => a + +c,0) || 0;
}