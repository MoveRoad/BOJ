const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().trim().split('\r\n');

dy= [-1, -1, -1, 0, 0, 1, 1, 1];
dx= [-1, 0, 1, -1, 1, -1, 0, 1]

const bfs = (ay, ax) => {
    let queue = [];
    queue.push([ay, ax]);

    while(queue.length>0){
        let [y, x] = queue.shift();
        visited[y][x] = true;
        //console.log(`${1} : ${visited[0]}`);

        for(let i=0; i<8; i++){
            ty = y + dy[i];
            tx = x + dx[i];
        }

        if(tx<0 || tx>=X || ty<0 || ty>=Y) continue;

        if(visited[ty][tx] === 0 && earth[ty][tx]){
            queue.push([ty, tx]);
        }
    }
}

const [X, Y] = input[0].split(' ');
input.shift();
let earth = [];
let visited = Array.from(Array(Y), () => Array(X).fill(null));

for(let i=0; i<Y; i++){
    earth.push(input[i].split(' ').map(Number));
}

console.log(Y, X, visited);

let cnt = 0;

for(let i=0; i<Y; i++){
    for(let j=0; j<X; j++){
        if(visited[i][j] === 0 && earth[i][j] === 1){
            //console.log(visited);
            cnt++;
            //bfs(i, j);
        }
    }
}

console.log(cnt);