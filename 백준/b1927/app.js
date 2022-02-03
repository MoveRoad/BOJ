const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = fs.readFileSync(filePath).toString().trim();

const [n, ...arr] = input.split('\n').map((s) => parseInt(s));

class minHeap{
    constructor(){
        this.heap = [];
    }

    insert(data){
        this.heap.push(data);
        let child = this.heap.length-1;
        let parent = Math.floor((child-1)/2);
        
        while(this.heap[parent] > this.heap[child]){
            this.swap(parent, child);
            child = parent;
            parent = Math.floor((child-1)/2);
        }
    }

    pop(){
        if(this.heap.length<2) return this.heap.pop() || 0;

        let head = this.heap[0];

        this.heap[0] = this.heap.pop();

        let parent = 0;
        let child = parent*2 + 1; //왼쪽 자식 기준

        if(this.heap[child+1] && this.heap[child] > this.heap[child+1]) child++;

        while(this.heap[child] && this.heap[parent] > this.heap[child]){
            this.swap(parent, child);
            parent = child;
            child = parent * 2 + 1;
            if (this.heap[child+1] && this.heap[child] > this.heap[child+1]) child++;
        }

        return head;
    }

    swap(x, y){
        [this.heap[x], this.heap[y]] = [this.heap[y], this.heap[x]];
    }
}

const mh = new minHeap();

let answer = [];

for (const i of arr){
    if(i === 0){
        answer.push(mh.pop());
    }else{
        mh.insert(i);
    }
}

console.log(answer.join('\n'));