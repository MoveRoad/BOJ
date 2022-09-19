class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

class Queue {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  push(data) {
    const node = new Node(data);

    if (!this.head) this.head = node;
    else {
      this.tail.next = node;
    }

    this.tail = node;
    this.length++;
  }

  remove() {
    if (!this.head) return false;

    const data = this.head.data;
    this.head = this.head.next;
    this.length--;

    return data;
  }
}

function solution(queue1, queue2) {
  let answer = -1;

  const q1 = new Queue();
  const q2 = new Queue();

  let q1sum = 0;
  let q2sum = 0;

  for (const q of queue1) {
    q1.push(q);
    q1sum += q;
  }

  for (const q of queue2) {
    q2.push(q);
    q2sum += q;
  }

  const maxChange = queue1.length * 4;

  const middleNum = (q1sum + q2sum) / 2;

  for (let i = 0; i < maxChange; i++) {
    if (q1sum < middleNum) {
      const shiftItem = q2.remove();
      q1.push(shiftItem);
      q1sum += shiftItem;
      q2sum -= shiftItem;
    } else if (q1sum > middleNum) {
      const shiftItem = q1.remove();
      q2.push(shiftItem);
      q1sum -= shiftItem;
      q2sum += shiftItem;
    } else if (q1sum === middleNum) {
      answer = i;
      break;
    }
  }

  return answer;
}
