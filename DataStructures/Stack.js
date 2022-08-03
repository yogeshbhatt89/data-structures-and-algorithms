/*A Stack is a Last in first out Data Structure.
This is a Linked List implementation of it But it can also be done with Arrays.

The last  element added to the stack should  be the first element removed.
Ex: A stack of books. where you are adding more books to the top.
    And then removing from the top of the pile.

   *** Stack prioritizes inserting and removing ***
    Time complexity of those methods O(1)
 */

class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

class Stack {
  constructor() {
    this.first = null;
    this.last = null;
    this.size = 0;
  }
  // add to the beginning of the stack
  // return the new size of the stack
  push(val) {
    let node = new Node(val);
    if (!this.first) {
      this.first = node;
      this.last = node;
    } else {
      node.next = this.first;
      this.first = node;
    }

    return ++this.size;
  }
  // remove from the beginning of the stack
  // return the removed elements value
  pop() {
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
const stack = new Stack();
console.log(stack.push(1));
console.log(stack.push(2));
console.log(stack.push(3));
console.log(stack.push(4));
console.log(stack.pop());
console.log(stack);
