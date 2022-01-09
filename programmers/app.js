solution(6,6,[[2,2,5,4],[3,3,6,6],[5,1,6,3]]);


function solution(rows, columns, queries) {
    var answer = [];
    let cnt = 1;
    
    let tables = [];
    
    for(let i=0; i<rows; i++){
        let temp = [];
        for(let j=0; j<columns; j++){
            temp.push(cnt++);
        }
        tables.push(temp);
    }
    
    while(queries.length > 0){
        let temp = queries.shift();
        let idx = 0;
        //오른쪽
        for(let i=temp[1];i<=temp[3];i++){
            if(i===temp[1]) idx = tables[temp[0]-1][temp[1]-1];
            else{
                tables[temp[0]-1][temp[i]-1] = idx;
                idx = tables[temp[0]-1][temp[i]-1];
            }
        }
        console.log(tables);
    }
    
    return answer;
}