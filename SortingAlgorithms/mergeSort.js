// Merge Sort is a Divide and Conquer algorithm. It divides the input array into two halves, calls itself for the two halves, and then it merges the two sorted halves. The merge() function is used for merging two halves.
// [5,8,6,4,10,1,5,0]
// [5,8,6,4] [10,1,5,0]
// [5,8] [6,4] [10,1] [5,0]
// [5][8] [4][6] [1][10] [0][5]
// [5,8] [4,6] [1,10] [0,5]
// [4,5,6,8] [0,1,5,10]
// [0,1,4,5,5,6,8,10]

// Time complexity O(n * log n)

// O(log n) decompositions for the amount of times the array splits
// O(n) comparisons per decomposition

// Space complexity O(n)

function merge(arr1, arr2) {
  // time complexity = O(n+m)
  let results = [];
  let i = 0;
  let j = 0;
  while (i < arr1.length && j < arr2.length) {
    if (arr2[j] > arr1[i]) {
      results.push(arr1[i]);
      i++;
    } else {
      results.push(arr2[j]);
      j++;
    }
  }
  //   while(i < arr1.length) {
  //       results.push(arr1[i])
  //       i++;
  //   }
  //   while(j < arr2.length) {
  //       results.push(arr2[j])
  //       j++;
  //   }
  //   [...output,...arr1.slice(i),...arr2.slice(j)]
  return [...output, ...arr1.slice(i), ...arr2.slice(j)];
}

// Recursive Merge Sort
function mergeSort(arr) {
  if (arr.length <= 1) return arr;
  let mid = Math.floor(arr.length / 2);
  let left = mergeSort(arr.slice(0, mid));
  let right = mergeSort(arr.slice(mid));

  return merge(left, right);
}

console.log(mergeSort([5, 8, 6, 4, 10, 1, 5, 0]));
// console.log(
//   mergeSort([
//     -4, 5, 10, 8, -10, -6, -4, -2, -5, 3, 5, -4, -5, -1, 1, 6, -7, -6, -7, 8,
//   ])
// );
// console.log(mergeSort([]));
// console.log(
//   mergeSort([
//     991, -731, -882, 100, 280, -43, 432, 771, -581, 180, -382, -998, 847, 80,
//     -220, 680, 769, -75, -817, 366, 956, 749, 471, 228, -435, -269, 652, -331,
//     -387, -657, -255, 382, -216, -6, -163, -681, 980, 913, -169, 972, -523, 354,
//     747, 805, 382, -827, -796, 372, 753, 519, 906,
//   ])
// );
