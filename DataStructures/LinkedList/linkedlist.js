"use strict";

// LinkedList is made of nodes, which consist two values: 'data' & 'next node address'
class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null; // Initially our list is empty
  }

  updateHead(data) {
    const node = new Node(data);
    node.next = this.head; // add curr head data in a next
    this.head = node; // update head node with new value
  }

  updateTail(data) {
    const node = new Node(data);

    // If list is empty
    if (!this.head) {
      this.head = node;
      return;
    }

    let curr = this.head; // select head
    while (curr.next) curr = curr.next; // traverse list until hit null(falsy) value
    curr.next = node; // update tail node with new value
  }

  size() {
    const node = new Node(data);
    let count = 0;

    let curr = this.head; // select head
    while (curr) {
        count++;
        curr = curr.next; // traverse list
    }

    return count;
  }

  // add new node at particular idx
  addAt (idx, value) {
    // if index is invalid reference
    if (idx < 0 || idx > this.size()) {
        console.error('Index out of bound');
        return;
    }

    const node = new Node(value);
    
    // If given idx is 1st then it's head
    if (idx === 0) {
        node.next = this.head; // add curr head data in a next
        this.head = node; // update head node with new value
        return;
    }

    // Insert node at given idx
    let curr = this.head; // select head
    for (let i=0; i<=idx; i++) curr = curr.next;
    node.next = curr.next;
    curr.next = node;
  }

  // remove node at particular idx
  removeAt(idx) {
    // if index is invalid reference
    if (idx < 0 || idx > this.size()) {
        console.error('Index out of bound');
        return;
    }
    
    // If given idx is 1st
    if (idx === 0) this.removeHead();

    // If given idx is last
    if (idx === this.size()-1) this.removeTail();

    // remove node at given idx
    let curr = this.head; // select head
    for (let i=0; i<idx; i++) curr = curr.next;
    curr.next = curr.next.next;
  }

  removeHead() {
    if (!this.head) return;
    this.head = this.head.next;
  }

  removeTail() {
    if (!this.head) return; // if nothing in list
    if (this.size() === 1) { // If only 1 element in list
        this.head = null;
        return;
    }

    let curr = this.head;
    while(curr.next.next) curr = curr.next; // select 2nd last element
    curr.next = null; // make last element null
  }

  print() {
    if (this.size > 0) {
        let curr = this.head;
        while(curr) {
            console.log(`${curr.data} => `);
            curr = curr.next;
        }
    }else
        console.log('LinkedList is empty!');
  }
}

const linkedList = new LinkedList();

linkedList.print();

linkedList.updateHead(2);
linkedList.updateHead(9);
linkedList.updateHead(1);

linkedList.print();

