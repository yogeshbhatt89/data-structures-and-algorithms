/*A Queue is a First in first out Data Structure.
This is a Linked List implementation of it But it can also be done with Arrays.

The first element added to the queue should  be the first element removed.
Real life Ex: A line at the grocery store to checkout.
              First person to join the line is the first person to finish checkout and leave.

   *** Queue prioritizes inserting and removing ***
    Time complexity of those methods O(1)
 */

class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

class Queue {
  constructor() {
    this.first = null;
    this.last = null;
    this.size = 0;
  }
  // add to the end of the queue
  // return the new size of the queue
  enqueue(val) {
    let node = new Node(val);
    if (!this.first) {
      this.first = node;
      this.last = node;
    } else {
      this.last.next = node;
      this.last = node;
    }
    return ++this.size;
  }
  // remove from the beginning of the queue
  // return the removed elements value
  dequeue() {
    if (!this.first) return null;
    let temp = this.first;
    if (this.first === this.last) {
      this.last = null;
    }
    this.first = this.first.next;
    this.size--;
    return temp.val;
  }
}
const queue = new Queue();
console.log(queue.enqueue(1));
console.log(queue.enqueue(2));
console.log(queue.enqueue(3));
console.log(queue.enqueue(4));
// console.log(queue.pop());
console.log(queue);
console.log(queue.dequeue());
console.log(queue.dequeue());
console.log(queue.dequeue());
console.log(queue.dequeue());
console.log(queue.dequeue());
