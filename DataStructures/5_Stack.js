'use strict';

// Stack DS is just a framework based on Principal of 'LIFO/FILO' : Last in first out/ First in last out. Implemented using array.

// Stack support operations : push, pop, peek, isEmpty, etc.

// Stack DS Implementation
class Stack {
    constructor () {
        this.items = []; // empty arr
    }

    // push element to stack arr
    push(element) {
        this.items.push(element);
    }

    // remove last inserted element from stack arr
    pop() {
        if (this.isEmpty()) return 'Stack is empty';
        return this.items.pop();
    }

    // return latest element of a stack arr
    peek() {
        if (this.isEmpty()) return 'Stack is empty';
        return this.items[this.size()-1];
    }

    isEmpty() {
        return this.size() === 0;
    }

    size() {
        return this.items.length;
    }

    print() {
        return this.items.toString();
    }
};

const stack = new Stack();

stack.push(1);
stack.push(20);
stack.push(4);

console.log(stack);
console.log(stack.pop());
console.log(stack.isEmpty());
console.log(stack.peek());
console.log(stack.size());
console.log(stack.print()+'\n');


// Leet Code Problem using Stack
var reverseWords = function(s) {
    let sArr = s.split(' ');
    let stack = [];
    let revStr = '';

    for (let i of sArr) stack.push(i);

    while(stack.length) {
        let check = stack.pop();
        if (check !== '') revStr += check+" ";
    }

    return revStr.trim();
};

let s1 = "the sky is blue";
let s2 = "  hello world  ";
let s3 = "a good   example";

console.log(reverseWords(s1));
console.log(reverseWords(s2));
console.log(reverseWords(s3));

