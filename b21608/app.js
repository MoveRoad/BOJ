const fs = require('fs');
const { parse } = require('path/posix');
const { listenerCount } = require('process');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().trim().split('\r\n');

const N = parseInt(input.shift());
let student = [];

for(let i of input){
    let temp = i.split(' ');
    student.push([temp.shift(),(temp)]);
}

let classroom = Array.from(Array(N), () => Array(N).fill(0));


dy = [-1,1,0,0];
dx = [0,0,-1,1];

while (student.length > 0) {
    let likeStudent = Array.from(Array(N), () => Array(N).fill(0));
    let emptyStduent = Array.from(Array(N), () => Array(N).fill(0));
    let name = student.shift();

    for (let y = 0; y < N; y++) {
        for (let x = 0; x < N; x++) {

            for (let i = 0; i < 4; i++) {
                ay = y + dy[i];
                ax = x + dx[i];

                if (ay < 0 || ay >= N || ax < 0 || ax >= N) continue;

                for (let temp of name[1]){
                    if(classroom[ay][ax] === Number(temp)){
                        likeStudent[y][x] += 1;
                        break;
                    }
                }

                if(classroom[ay][ax] === 0){
                    emptyStduent[y][x] += 1;
                }
            }
        }
    }

    let likeMax = Math.max.apply(null, likeStudent.flat());
    let numberLike = likeStudent.flat().filter(el => el === likeMax).length;

    let emptyMax = Math.max.apply(null, emptyStduent.flat());
    let numberEmpty = emptyStduent.flat().filter(el => el === likeMax).length;

    if(numberLike === 1){
        
    }else{
        

        console.log(emptyMax,numberEmpty);
    }
}