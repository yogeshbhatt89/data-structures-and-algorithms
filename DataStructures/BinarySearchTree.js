/*Binary Search Tree

Big O Time complexity
##########################################
inserting O(log n)
search O(log n)
##########################################

 */


class Node {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null;
  }
  // method inserts a value into the tree
  // duplicate values are not stored in this tree
  insert(val) {
    let newNode = new Node(val);
    if (!this.root) {
      this.root = newNode;
      return this;
    } else {
      let current = this.root;
      while (true) {
        if(val === current.val) {// if the node already exists
           console.log("Value already exists in the Tree")
           return undefined}
        if (val < current.val) {
          if (current.left === null) {// if there is no left node then insert the new node here
            current.left = newNode;
            return this;
          } else {// traverse the left side
            current = current.left;
          }
        } else if(val >current.val){
          if (current.right === null) {// if there is no right node then insert the new node here
            current.right = newNode;
            return this;
          } else {// traverse the right side
            current = current.right;
          }
        }
      }
    }
  }
  // function  searches the tree and if it finds the value passed in
  //  it returns true otherwise returns false
  search(val) {
    if (this.root === null) return false;
    let current = this.root;
    let found = false;
    while (current && found === false) {
      if (val < current.val) {//value is less than current search left side
        current = current.left;
      } else if (val > current.val) {//value is greater than current search right side
        current = current.right;
      } else {
        return true;
      }
    }

    return false;
  }
}

const tree = new BinarySearchTree();
console.log(tree.insert(10));
console.log(tree.insert(5));
console.log(tree.insert(13));
console.log(tree.insert(11));
console.log(tree.insert(2));
console.log(tree.search(2));

// console.log(tree.search(10));
// console.log(tree.search(6));
