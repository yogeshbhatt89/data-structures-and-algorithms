/*Singly Linked List

Arrays have indexes where Singly Linked Lists do not

Big O Time complexity
##########################################
if inserting and deleting in the beginning use Linked lists over Arrays
inserting O(1)
removal  best case O(1) -> O(n) worst case
##########################################
search O(n)  worst case
getting a node O(n)

*/
class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

class SinglyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }
  // add a node to the end of the list
  push(val) {
    let newNode = new Node(val);
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }
    this.length++;
    return this;
  }
  // remove a node from the end of the list
  pop() {
    if (!this.head) return undefined;
    let current = this.head;
    let newTail = current;
    while (current.next) {
      newTail = current;
      current = current.next;
    }
    this.tail = newTail;
    this.tail.next = null;
    this.length--;
    return current;
  }
  // remove a node from the start of the list
  shift() {
    if (!this.head) return undefined;
    let current = this.head;
    this.head = current.next;
    this.length--;
    if (this.length === 0) this.tail = null;
    return this;
  }
  // add a new node to the beginning of the list
  unshift(val) {
    let newNode = new Node(val);
    if (!this.head) {
      this.head = newNode;
      this.tail = this.head;
    } else {
      newNode.next = this.head;
      this.head = newNode;
    }
    this.length++;
    return this;
  }
  // Retrieve a node by its position in the list
  get(idx) {
    if (idx < 0 || idx >= this.length) return null;
    let counter = 0;
    let curr = this.head;
    while (counter !== idx) {
      curr = curr.next;
      counter++;
    }
    return curr;
  }
  // change the value of a node based on its position in the list
  set(idx, val) {
    let node = this.get(idx);
    if (!node) {
      return false;
    }
    node.val = val;
    return true;
  }
  // add a node to the linked list based on its position in  the list
  insert(idx, val) {
    if (idx < 0 || idx > this.length) return false;
    if (idx === this.length) return !!this.push(val); // !! to return a boolean since  push method return the list instead
    if (idx === 0) return !!this.unshift(val); // !! to return a boolean since  unshift method return the list instead
    let newNode = new Node(val);
    let prev = this.get(idx - 1);
    let temp = prev.next;
    prev.next = newNode;
    newNode.next = temp;
    this.length++;
    return true;
  }
  // remove a node from the list at a specific position
  remove(idx) {
    if (idx < 0 || idx >= this.length) return undefined;
    if (idx === this.length - 1) return this.pop();
    if (idx === 0) return this.shift();
    let node = this.get(idx - 1);
    let removed = node.next;
    node.next = removed.next;
    this.length--;
    return removed;
  }
  // finds elements that match val and removes them from the list
  removeSameElements(head, val) {
    let dummy = new Node(-1);
    dummy.next = null;
    let temp = dummy;

    while (head) {
      if (head.val !== val) {
        temp.next = head;
        temp = temp.next;
      }
      head = head.next;
    }
    temp.next = null;
    return dummy.next;
  }
  // reverse the list in place
  reverse() {
    let node = this.head;
    this.head = this.tail;
    this.tail = node;
    let prev = null;
    while (node) {
    let next = node.next;
      node.next = prev;
      prev = node;
      node = next;
    }
    return this;
  }
}

const list = new SinglyLinkedList();
console.log(list.push(1));
console.log(list.push(2));
console.log(list.push(3));
console.log(list.push(7));
console.log(list.push(7));
console.log(list.push(9));
// console.log("list before removal", list);

// console.log(list.removeElements(list.head, 9));

// console.log(list.remove(1));

console.log(list);
console.log(list.reverse());
console.log(list);

// console.log("newListafterremoval", list);
// console.log("reversedList", list.reverseList(list));
