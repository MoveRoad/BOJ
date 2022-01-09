const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().split('\r\n');

const N = input.shift();
let Maxheap = [];

for(let i of input){
    if(Number(i) === 0){
        console.log(heap_delete(Maxheap) || 0);
    }else if(Number(i) > 0){
        heap_insert(Maxheap, Number(i));
    }
}


function heap_insert(heap, data){
    let index = heap.length;

    if(heap.length===0) heap.push(data);
    else{
        heap.push(data);
        while(index > 0){
            const parent = Math.floor((index-1)/2);
            const child = index;

            if (heap[parent] < heap[child]) {
                [heap[parent], heap[child]] = [heap[child], heap[parent]];

                index = parent;
            } else {
                break;
            }
        }
    }
}

function heap_delete(heap){
    const head = heap[0];
    heap[0] = heap[heap.length-1];
    heap.pop();
    let child = 2;
    let parent = 0;

    while(child <heap.length){
        if(heap[child-1] > heap[child]){// 왼쪽 자식이 더 크면
            child -= 1;
        }

        if(heap[parent] > heap[child]) break;

        [heap[parent], heap[child]] = [heap[child], heap[parent]];

        parent = child;
        child *= 2;
    }

    return head;
}