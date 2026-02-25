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
        if (this.isEmpty()) return null;
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

// const queue = new Queue;

// console.log(queue.peek());

// queue.enqueue(1);
// queue.enqueue(20);
// queue.enqueue(4);

// console.log(queue);
// console.log(queue.dequeue());
// console.log(queue.isEmpty());
// console.log(queue.peek());
// console.log(queue.size());
// console.log(queue.print()+'\n');


/** Note:
 Difference between Regular & Circular Queue:

 A 'regular queue' is a linear data structure that has no space boundary, means if elements are dequeued from the front, leaving gaps that can't be reused.

 A 'circular queue' is a variant implemented as a circular buffer. When the rear(back) reaches the end of the array, it wraps around to the beginning if space is available, allowing better space utilization and avoiding the wasted space issue of regular queues. It uses modulo arithmetic for indexing to achieve this circular behavior.
 */

// Implement Circular - Queue 
// CircularQueue support operations : enqueue(push), dequeue(shift), front, rear(back), isEmpty, isFull, print, etc.

class CircularQueue {
    constructor(capacity) {
        this.items = new Array(capacity);
        this.capacity = capacity;
        this.currentLength = 0;
        this.front = -1;
        this.rear = -1;
    }

    isEmpty() {
        return this.currentLength === 0;
    }

    isFull() {
        return this.capacity === this.currentLength;
    }

    enqueue(element) {
        if (!this.isFull()) {
            // % make circle: 5%5 = 0
            this.rear = (this.rear+1) % this.capacity;
            this.items[this.rear] = element;
            this.currentLength += 1;
            
            // stick 'front' pointer to 1st element
            if(this.front === -1) this.front = this.rear;

            return 'Done';
        }else
            return 'Error: Queue is full!'
    }

    dequeue() {
        if (this.isEmpty()) return "Queue is Empty";
        
        const pop = this.items[this.front];
        this.items[this.front] = null; // Clean up memory
        
        // Wrap around logic
        this.front = (this.front + 1) % this.capacity;
        this.currentLength--;

        // if queue is empty then reset pointers
        if (this.isEmpty()) { 
            this.front = -1, this.rear = -1;
        }
        return pop;
    }

    peek() {
        return !this.isEmpty() ? this.items[this.front] : null;
    }

    print() {
        // return this.items.filter(i => i !== null).join(" -> ");
        if (this.isEmpty()) return 'Queue is empty';
        let str = '';
        for (let item of this.items) {
            str += `${item} -> `;
        }
        return str;
    }
};

const cq = new CircularQueue(3);

console.log(cq);

console.log(cq.enqueue(1)); // added 1
console.log(cq.enqueue(2)); // added 2
console.log(cq.enqueue(3)); // added 3

console.log(cq);
console.log(cq.isFull()); // true

console.log(cq.dequeue()); // removed 1
console.log(cq.isEmpty()); // false
console.log(cq.isFull());  // false
console.log(cq.peek());    // 2
console.log(cq.print()+'\n'); // null -> 2 -> 3 ->
