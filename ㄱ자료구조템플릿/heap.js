class minHeap {
  constructor() {
    this.heap = [];
  }

  insert(data) {
    this.heap.push(data);
    let child = this.heap.length - 1;
    let parent = Math.floor((child - 1) / 2);

    while (this.heap[parent] > this.heap[child]) {
      this.swap(parent, child);
      child = parent;
      parent = Math.floor((child - 1) / 2);
    }
  }

  pop() {
    if (this.heap.length < 2) return this.heap.pop() || 0;

    let head = this.heap[0];

    this.heap[0] = this.heap.pop();

    let parent = 0;
    let child = parent * 2 + 1; //왼쪽 자식 기준

    if (this.heap[child + 1] && this.heap[child] > this.heap[child + 1])
      child++;

    while (this.heap[child] && this.heap[parent] > this.heap[child]) {
      this.swap(parent, child);
      parent = child;
      child = parent * 2 + 1;
      if (this.heap[child + 1] && this.heap[child] > this.heap[child + 1])
        child++;
    }

    return head;
  }

  swap(x, y) {
    [this.heap[x], this.heap[y]] = [this.heap[y], this.heap[x]];
  }
}
