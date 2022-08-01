// Binary search uses an already SORTED array
//it searches based on conditions
// searches specific areas of the array depending on those conditions

// time complexity O(log n) n=  length of the array
// space complexity O(1)
const binarySearch = (arr, val) => {
  let start = 0;
  let end = arr.length - 1;

  while (start <= end) {
    let mid = Math.floor((start + end) / 2);
    if (arr[mid] === val) return mid;
    else if (arr[mid] < val) start = mid + 1;
    else end = mid - 1;
  }
  return -1;
};

console.log(binarySearch([1, 3, 6, 4, 99, 234], 3));
console.log(binarySearch([], 3));
console.log(binarySearch([1, 3, 6, 4, 99, 234], 0));
console.log(binarySearch([1, 3, 6, 4, 99, 234], 234));
console.log(binarySearch(["cat", "few", "asdf", "bat", "here"], "here"));
