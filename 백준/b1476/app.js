const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().trim().split('\r\n');

let [E, S, M] = input[0].split(' ').map(Number);
let te = 1;
let ts = 1;
let tm = 1;

let cnt = 1;
while(true){
    if(te === E && ts === S && tm === M) break;
    cnt++;
    te++;
    ts++;
    tm++;

    if(te>15) te = te % 15;
    if(ts>28) ts = ts % 28;
    if(tm>19) tm = tm % 19;
}

console.log(cnt);