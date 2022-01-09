const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().split('\r\n');

const N = input.shift();
let Maxheap = [];
let Minheap = [];

for(let i of input){
    if(Maxheap.length === 0) heap_insert(Maxheap, Number(i), 0);
    else{
        if(Maxheap.length>Minheap.length) heap_insert(Minheap, Number(i), 1);
        else heap_insert(Maxheap, Number(i), 0);

        if(Maxheap[0]> Minheap[0]){
            let mintop = heap_delete(Minheap, 1);
            heap_insert(Minheap, heap_delete(Maxheap,0), 1);
            heap_insert(Maxheap, mintop, 0);
        }
    }
    console.log(Maxheap[0]);
}


function heap_insert(heap, data, status){
    let index = heap.length;

    if(heap.length===0) heap.push(data);
    else{
        heap.push(data);
        while(index > 0){
            const parent = Math.floor((index-1)/2);
            const child = index;

            if (status === 0) { // 최대 힙일 때
                if (heap[parent] < heap[child]) {
                    [heap[parent], heap[child]] = [heap[child], heap[parent]];

                    index = parent;
                } else {
                    break;
                }
            }else{ // 최소 힙일 때
                if (heap[parent] > heap[child]) {
                    [heap[parent], heap[child]] = [heap[child], heap[parent]];

                    index = parent;
                } else {
                    break;
                }
            }
        }
    }
}

function heap_delete(heap, status){
    const head = heap[0];
    heap[0] = heap[heap.length-1];
    heap.pop();
    let index = 0;

    while(index<heap.length){
        const child = (index+1)*2;
        const parent = index;
        
        if(status === 0){ /// 최대힙 일때
            if(heap[parent] < heap[child]){ // 오른쪽 자식
                [heap[parent], heap[child]] = [heap[child], heap[parent]];
    
                index = child;
            }else if(heap[parent] < heap[child-1]){ // 왼쪽 자식
                [heap[parent], heap[child-1]] = [heap[child-1], heap[parent]];
    
                index = child-1;
            }else{
                break;
            }
        }else{ /// 최소힙 일때
            if (heap[parent] > heap[child]) { // 오른쪽 자식
                [heap[parent], heap[child]] = [heap[child], heap[parent]];

                index = child;
            } else if (heap[parent] > heap[child - 1]) { // 왼쪽 자식
                [heap[parent], heap[child - 1]] = [heap[child - 1], heap[parent]];

                index = child - 1;
            } else {
                break;
            }
        }
    }

    return head;
}