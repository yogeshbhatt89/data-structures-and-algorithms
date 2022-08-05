/*Binary Search Tree

Big O Time complexity
##########################################
inserting O(log n)
search O(log n)
##########################################

            10
       5          13
     2  6       11  15
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
        if (val === current.val) {
          // if the node already exists
          console.log("Value already exists in the Tree");
          return undefined;
        }
        if (val < current.val) {
          if (current.left === null) {
            // if there is no left node then insert the new node here
            current.left = newNode;
            return this;
          } else {
            // traverse the left side
            current = current.left;
          }
        } else if (val > current.val) {
          if (current.right === null) {
            // if there is no right node then insert the new node here
            current.right = newNode;
            return this;
          } else {
            // traverse the right side
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
      if (val < current.val) {
        //value is less than current search left side
        current = current.left;
      } else if (val > current.val) {
        //value is greater than current search right side
        current = current.right;
      } else {
        return true;
      }
    }

    return false;
  }
  // breath first search
  // time complexity O(n)
  // space O(n)
  /*
            10
       5   ->     13
     2 -> 6     11 -> 15
  */
  breathFirstSearch() {
    let node = this.root;
    let array = [];
    let queue = [];
    queue.push(node);
    while (queue.length) {
      node = queue.shift();
      array.push(node.val);
      if (node.left) queue.push(node.left);
      if (node.right) queue.push(node.right);
    }
    return array;
  }
  // depth first search
  // time complexity O(n)
  // space O(n)

 /*
            10
       5        13
     2  6     11  15

[2,  5,  6, 10, 11, 13, 15]
*/
  dfsInOrder() {
    if (this.root === null) return false;
    let array = [];
    const inOrder = (root) => {
      if (root.left) inOrder(root.left);
      array.push(root.val);
      if (root.right) inOrder(root.right);
    };
    inOrder(this.root);
    return array;
  }
/*
            10
       5        13
     2  6     11  15

[ 10, 5, 2, 6, 13, 11, 15]
*/
  dfsPreOrder() {
    if (this.root === null) return false;
    let array = [];
    const preOrder = (root) => {
      array.push(root.val);
      if (root.left) preOrder(root.left);
      if (root.right) preOrder(root.right);
    };
    preOrder(this.root);
    return array;
  }
/*
            10
       5        13
     2  6     11  15

[ 2,  6,  5, 11, 15, 13, 10]
*/
  dfsPostOrder() {
    if (this.root === null) return false;
    let array = [];
    const postOrder = (root) => {
      if (root.left) postOrder(root.left);
      if (root.right) postOrder(root.right);
      array.push(root.val);
    };
    postOrder(this.root);
    return array;
  }
}

const tree = new BinarySearchTree();
console.log(tree.insert(10));
console.log(tree.insert(5));
console.log(tree.insert(13));
console.log(tree.insert(11));
console.log(tree.insert(6));
console.log(tree.insert(2));
console.log(tree.insert(15));


// console.log(tree.search(2));

// console.log(tree.search(10));
// console.log(tree.search(6));
console.log(tree.dfsInOrder());
console.log(tree.dfsPreOrder());
console.log(tree.dfsPostOrder());

// console.log(tree.breathFirstSearch());
