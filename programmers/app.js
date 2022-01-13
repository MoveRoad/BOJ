solution([[1,2,3,5],[5,6,7,8],[4,3,2,1]]);



function solution(land) {
    const dfs = (sum, idx, count, visited, land) => {
        //0, 0, 0, [0, 0, 0, 0], land
        visited[idx] = 1;
        
        if(count === 2) return sum;

        count++;
            
        for(let i=0; i<4; i++){
            //console.log(`sum = ${sum+land[count][i]}, idx = ${i}, count = ${count}, visited = ${visited}, land = ${land}`);
            if(visited[i] === 0){
                //console.log(`i = ${i}, sum = ${sum}, idx = ${idx}, count = ${count}, visited = ${visited}, land = ${land}`);
                dfs(sum+land[count][i], i, count, visited, land);
                visited[idx] = 0;
                count--;
            }
        }
    }

    let answer = [];
    let visited = [0, 0, 0, 0];
    let cnt = 0;

    for(let i=0; i<4; i++){
        dfs(land[0][i], i, cnt, visited, land);
    }

    return answer;
}