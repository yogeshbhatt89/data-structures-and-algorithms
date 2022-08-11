class MaxBinaryHeap {
  constructor() {
    this.values = [];
  }
  insert(element) {
    this.values.push(element);
    // bubbling up
    let idx = this.values.length - 1;
    const elem = this.values[idx];
    while (idx > 0) {
      let parentIdx = Math.floor((idx - 1) / 2);
      let parent = this.values[parentIdx];
      if (elem <= parent) break;
      this.values[parentIdx] = elem;
      this.values[idx] = parent;
      idx = parentIdx;
    }
  }
}
let heap = new MaxBinaryHeap();
console.log(heap.insert(5));
console.log(heap.insert(20));
console.log(heap.insert(1));
console.log(heap.insert(200));
console.log(heap.insert(50));

console.log(heap.values)
