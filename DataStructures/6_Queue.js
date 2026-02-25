'use strict';

// Queue DS is just a framework based on Principal of 'FIFO' : First In First Out. Implemented using array.

// Queue support operations : enqueue(push), dequeue(shift), peek, isEmpty, size, print, etc.

// Queue DS Implementation
class Queue {
    constructor() {
        this.Queue = [];
    }

    //enqueue(push)
    enqueue(element) {
        this.Queue.push(element);
    }

    //dequeue(shift)
    dequeue() {
        return this.Queue.shift();
    }

    isEmpty() {
        return this.Queue.length === 0;
    }

    peek() {
        return !this.isEmpty()? this.Queue[0] : null;
    }

    size() {
        return this.Queue.length;
    }

    print() {
        return this.Queue.toString();
    }
};

const queue = new Queue;

queue.enqueue(1);
queue.enqueue(20);
queue.enqueue(4);

console.log(queue);
console.log(queue.dequeue());
console.log(queue.isEmpty());
console.log(queue.peek());
console.log(queue.size());
console.log(queue.print()+'\n');