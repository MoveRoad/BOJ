const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().trim();

let [n, ...arr] = input.split('\n').map((el) => Number(el));

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
                if (this.node[leftchild] && this.node[leftchild] > this.node[currentNode]) currentNode = leftchild;

                if (this.node[rightchild] && this.node[rightchild] > this.node[currentNode]) currentNode = rightchild;

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

const maxHeap = new Heap();
const minHeap = new Heap();
const answer = [];

for(let i of arr){
    if(maxHeap.node.length === minHeap.node.length){
        maxHeap.insert(i, 'max');
    }else{
        minHeap.insert(i, 'min');
    }

    if(minHeap.node.length === 0) answer.push(maxHeap.node[0]);
    else {
        if(maxHeap.node[0] > minHeap.node[0]){
            const temp = minHeap.delete('min');
            const temp2 = maxHeap.delete('max');
            minHeap.insert(temp2, 'min');
            maxHeap.insert(temp, 'max');
        }
        answer.push(maxHeap.node[0]);
    }
}

console.log(answer.join('\n'));