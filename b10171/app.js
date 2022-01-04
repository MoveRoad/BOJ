const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().split('\r\n');

console.log("\\    /\\"+"\n )  ( ')"+"\n(  /  )"+"\n \\(__)|");