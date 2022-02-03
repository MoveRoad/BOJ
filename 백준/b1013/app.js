const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().trim().split('\r\n');

let caseNum = input[0];


// (100+1+ | 01)+ 여부를 반환해야 한다.
//+는 앞의 문자가 최소 1번 이상 반복됨을 의미
function isMatch(str){
    const regexp = /^(01|(100+1+))+$/g;
    let text = str.match(regexp)?.reduce((acc, cur) => acc+cur,"");
    //matStr을 join한 결과값이 원래 문자열과 같다면, 조건을 만족한다.
    if (text === undefined) text = text || 0;

    // console.log(`들어온 값(목표) : ${str}`)
    // console.log(`regex로 뽑아낸 배열 : ${str.match(regexp)}`);
    // console.log(`내가 뽑아낸 값: ${text}`);
    return (str.match(regexp)?.reduce((acc, cur) => acc+cur,"") === str);
}

for(let i = 1; i <= caseNum; i++){
    if(isMatch(input[i])) console.log("YES");
    else console.log("NO");
}