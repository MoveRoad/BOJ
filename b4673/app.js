const doSelf = (idx) => {
    let temp = idx + Math.floor(idx/1000) + Math.floor(idx%1000/100) + Math.floor(idx%100/10) + Math.floor(idx%10);

    if(temp>=10000) return 0;
    selfNumber[temp] = 0;
}

let selfNumber = new Array(10000).fill(1);

for(let i=0; i<selfNumber.length; i++){
    doSelf(i);
}
for(let i=0; i<selfNumber.length; i++){
    if(selfNumber[i] === 1) console.log(i);
}