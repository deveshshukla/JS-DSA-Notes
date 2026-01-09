# Data Structures - Interview Guide

## What is a Data Structure?
A **data structure** is a way to organize and store data in a computer so it can be accessed and modified efficiently. Think of it like organizing books in a library - you can arrange them by different methods (by author, genre, or size), and each way has different benefits.

---
## Built In DS

Arrays, Objects, Sets, Maps

## Custom DS

Stacks, Queues, Circular Queues, Linked Lists, Hash Tables, Trees, Graphs

---

## 1. Array
**What it is:** A collection of elements stored in **continuous memory**, accessible by index (position).

**Key Points:**
- **Access:** O(1) - Super fast, go directly to any element
- **Insert/Delete:** O(n) - Slow, have to shift elements
- **Use When:** You need fast access to elements by position

**Interview Answer:** "Arrays store multiple items in order. Think of them like seats in a movie theater - each seat has a number, and you can find any seat instantly. But if someone wants to sit in seat 5 and needs everyone to shift, it takes time."

---

## 2. Linked List
**What it is:** A collection of elements (nodes) where each node **points to the next one**. Not continuous in memory.

**Key Points:**
- **Access:** O(n) - Slow, must follow the chain
- **Insert/Delete:** O(1) - Fast if you already know the position
- **Use When:** You frequently add/remove items from beginning/middle

**Interview Answer:** "Linked Lists are like a train where each car points to the next one. You can't jump directly to the 5th car - you must go through 1, 2, 3, 4 first. But adding/removing a car is easy - just change what it's connected to."

---

## 3. Stack
**What it is:** A Last-In-First-Out (LIFO) structure. Last item added is first item removed.

**Key Points:**
- **Operations:** Push (add), Pop (remove), Peek (view top)
- **Time:** O(1) for all operations
- **Real-world:** Browser back button, undo feature, function call stack

**Interview Answer:** "A Stack is like a stack of plates. You add plates on top and remove from the top. You can't take a plate from the middle without removing what's on top first."

---

## 4. Queue
**What it is:** A First-In-First-Out (FIFO) structure. First item added is first item removed.

**Key Points:**
- **Operations:** Enqueue (add to back), Dequeue (remove from front)
- **Time:** O(1) for all operations
- **Real-world:** Printer queue, customer service line, message processing

**Interview Answer:** "A Queue is like standing in line at a coffee shop. The first person in line gets served first. New people join at the back, and people leave from the front."

---

## 5. Hash Table / Hash Map
**What it is:** Stores key-value pairs using a **hash function** to find items quickly.

**Key Points:**
- **Access:** O(1) average case - Very fast
- **Worst case:** O(n) - When collisions happen
- **Use When:** You need fast lookup by key (like a dictionary)

**Interview Answer:** "Hash Tables are like a dictionary. Instead of reading every word (slow), you look up by the first letter which tells you where to look. When you search for 'apple', it quickly directs you to the right section."

---

## 6. Tree
**What it is:** A hierarchical structure with a **root node** and **child nodes**, branching downward (no cycles).

**Key Points:**
- **Binary Tree:** Each node has max 2 children
- **Search:** O(log n) in balanced trees, O(n) worst case
- **Use When:** Organizing hierarchical data (file systems, DOM, decisions)

**Interview Answer:** "A Tree is like a family tree or organization chart. At the top is the root (CEO), and below are branches (departments). Each person reports to one person above them."

---

## 7. Binary Search Tree (BST)
**What it is:** A **Tree** where left child < parent < right child.

**Key Points:**
- **Search:** O(log n) average, O(n) worst case (unbalanced)
- **Insert/Delete:** O(log n) average
- **Use When:** Sorted data with frequent searches

**Interview Answer:** "A BST is like a decision tree at airport security. If your ID is under 30, go left. If over 30, go right. This way, you eliminate half the possibilities at each step."

---

## 8. Heap
**What it is:** A **Tree** where parent is larger (Max Heap) or smaller (Min Heap) than children.

**Key Points:**
- **Structure:** Complete binary tree (filled level by level)
- **Find Min/Max:** O(1)
- **Insert/Delete:** O(log n)
- **Use When:** Need fastest min/max access (priority queues)

**Interview Answer:** "A Heap is like a pyramid of priorities. The most important (or smallest) item is always at the top. When you remove the top, the next most important bubbles up."

---

## 9. Graph
**What it is:** A collection of **nodes (vertices)** connected by **edges**. Can have cycles and can be directed/undirected.

**Key Points:**
- **Directed:** One-way connections (like Twitter follow)
- **Undirected:** Two-way connections (like Facebook friendship)
- **Traversal:** BFS, DFS - O(V + E) where V=vertices, E=edges
- **Use When:** Representing networks, maps, relationships

**Interview Answer:** "A Graph is like a social network or map. Cities are nodes, roads are edges. You can travel from one city to another following the roads. Some roads might be one-way."

---

## 10. Trie (Prefix Tree)
**What it is:** A **Tree** optimized for storing strings, where each node represents a character.

**Key Points:**
- **Search:** O(m) where m = word length (very fast!)
- **Use When:** Autocomplete, spell checking, IP routing
- **Space:** More memory than hash tables but better for prefix matching

**Interview Answer:** "A Trie is like a dictionary organized by characters. To find 'cat', you go to 'c' node, then 'a' node under it, then 't' node. It's perfect for autocomplete - type 'ca' and quickly find all words starting with 'ca'."

---

## Quick Comparison for Interviews

| Data Structure | Access | Search | Insert | Delete | Best Use |
|---|---|---|---|---|---|
| Array | O(1) | O(n) | O(n) | O(n) | Random access by index |
| Linked List | O(n) | O(n) | O(1)* | O(1)* | Frequent insertions/deletions |
| Stack | O(n) | O(n) | O(1) | O(1) | LIFO needs (undo, backtrack) |
| Queue | O(n) | O(n) | O(1) | O(1) | FIFO needs (scheduling) |
| Hash Table | O(1)** | O(1)** | O(1)** | O(1)** | Key-value lookup |
| BST | O(log n)*** | O(log n)*** | O(log n)*** | O(log n)*** | Sorted data |
| Heap | O(n) | O(n) | O(log n) | O(log n) | Priority queues |
| Trie | - | O(m) | O(m) | O(m) | String prefix matching |

*If you already know the position
**Average case (worst: O(n) with collisions)
***Average case (worst: O(n) if unbalanced)

---

## Common Interview Questions

**Q: When would you use a Linked List over an Array?**
A: When you frequently insert/delete at the beginning or middle. Arrays are better for random access.

**Q: What's the difference between Stack and Queue?**
A: Stack is LIFO (last out), Queue is FIFO (first out). Use Stack for undo/backtracking, Queue for scheduling.

**Q: Why use a Hash Table instead of a Tree?**
A: Hash Tables are usually faster (O(1) vs O(log n)) and simpler. Trees are better when you need sorted data.

**Q: When do you use a Trie?**
A: For autocomplete, spell-checking, or when you need fast prefix matching on strings.

**Q: What makes a good data structure?**
A: It depends on what you need - fast access? Use Array or Hash Table. Frequent changes? Use Linked List. Hierarchical data? Use Tree.
