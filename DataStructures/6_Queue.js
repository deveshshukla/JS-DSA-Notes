'use strict';

// Queue DS is just a framework based on Principal of 'FIFO' : First In First Out. Implemented using array.

// Queue support operations : enqueue(push), dequeue(shift), peek, isEmpty, size, print, etc.

// Queue DS Implementation
class Queue {
    constructor() {
        this.items = [];
    }

    //enqueue(push)
    enqueue(element) {
        this.items.push(element);
    }

    //dequeue(shift)
    dequeue() {
        return this.items.shift();
    }

    isEmpty() {
        return this.items.length === 0;
    }

    peek() {
        return !this.isEmpty()? this.items[0] : null;
    }

    size() {
        return this.items.length;
    }

    print() {
        return this.items.toString();
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