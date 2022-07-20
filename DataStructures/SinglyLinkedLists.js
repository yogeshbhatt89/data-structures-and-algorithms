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
  // finds elements that match val and removes them from the list
  removeElements(head, val) {
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
  reverseList(head) {
    let pre = null;
    while (head) {
      const next = head.next;
      head.next = pre;
      pre = head;
      head = next;
    }
    return pre;
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

// console.log(list.pop(9));
// console.log("newListafterremoval", list);
console.log("reversedList", list.reverseList(list));


