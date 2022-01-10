const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().split('\n');

const N = Number(input.shift());

class Heap{
    constructor(){
        this.node = [];
    }

    insert(data, status){
        this.node.push(data);
        let child = this.node.length-1;
        
        if(status === 'max'){
            while(child !== 0){
                let parent = Math.floor((child-1)/2);
                
                if(this.node[parent] < this.node[child]){
                    this.swap(parent,child);
                    child=parent;
                } else {
                    break;
                }
            }
        }else{
            while(child !== 0){
                let parent = Math.floor((child-1)/2);
                
                if(this.node[parent] > this.node[child]){
                    this.swap(parent,child);
                    child=parent;
                } else {
                    break;
                }
            }
        }
    }

    delete(status){
        if(this.node.length===1) return this.node.pop();

        let topNode = this.node[0];

        this.node[0] = this.node.pop();

        let parent = 0;

        if(status === 'max'){
            while (true) {
                const leftchild = parent * 2 + 1;
                const rightchild = parent * 2 + 2;
                let currentNode = parent;

                // Left
                if (this.node[leftchild] !== undefined && this.node[leftchild] > this.node[currentNode]) currentNode = leftchild;

                if (this.node[rightchild] !== undefined && this.node[rightchild] > this.node[currentNode]) currentNode = rightchild;

                if (currentNode !== parent) {
                    this.swap(parent, currentNode);
                    parent = currentNode;
                } else break;
            }
        }else{
            while (true) {
                const leftchild = parent * 2 + 1;
                const rightchild = parent * 2 + 2;
                let currentNode = parent;

                // Left
                if (this.node[leftchild] !== undefined && this.node[leftchild] < this.node[currentNode]) currentNode = leftchild;

                if (this.node[rightchild] !== undefined && this.node[rightchild] < this.node[currentNode]) currentNode = rightchild;

                if (currentNode !== parent) {
                    this.swap(parent, currentNode);
                    parent = currentNode;
                } else break;
            }
        }

        return topNode;
    }

    swap(y, x){
        [this.node[y], this.node[x]] = [this.node[x], this.node[y]];
    }
}

for(let i=0; i<N; i++){
    const maxHeap = new Heap();
    const minHeap = new Heap(); 
    const testCase = Number(input.shift());
    const answer = [];
    let seq = [];
    let cnt = 1;

    let readCount = 1;
    if(testCase > 10){
        readCount = Math.ceil(testCase/10);
    }

    // 변수 받기
    for(let j=0; j<readCount; j++){
        let temp = input.shift().split(' ').map((el) => Number(el));
        seq.push(temp);
    }

    // 받은 변수 queue 에 넣기
    for(let l=0; l<seq.length; l++){
        for (let x of seq[l]) {
            if (maxHeap.node.length === minHeap.node.length) {
                maxHeap.insert(x, 'max');
            } else {
                minHeap.insert(x, 'min');
            }

            if (minHeap.node.length !== 0 && maxHeap.node[0] > minHeap.node[0]) {
                const temp = minHeap.delete('min');
                const temp2 = maxHeap.delete('max');
                minHeap.insert(temp2, 'min');
                maxHeap.insert(temp, 'max');
            }

            if ((cnt%2) === 1){
                answer.push(maxHeap.node[0]);
            }
            cnt++;
        }
    }

    if(answer.length > 10){
        readCount = Math.ceil(answer.length/10);
    }

    for(let j=1; j<readCount+1; j++){
        let string = "";
        if(j === 1) string += answer.length+'\n';
        for(let c=10*(j-1); c<10*j; c++){
            if(c>answer.length-1) break;
            string += answer[c]+ ' ';
        }
        
        console.log(string.trim());
    }
}