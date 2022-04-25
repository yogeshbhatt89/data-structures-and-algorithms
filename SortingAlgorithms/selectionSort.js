// The selection sort algorithm sorts an array by repeatedly finding the minimum element (considering ascending order) from unsorted part and putting it at the beginning. The algorithm maintains two subarrays in a given array.
// 1) The subarray which is already sorted.
// 2) Remaining subarray which is unsorted.
// In every iteration of selection sort, the minimum element (considering ascending order) from the unsorted subarray is picked and moved to the sorted subarray.

// Time complexity O(n^2)
// Space complexity O(1)

// compare minimum value and swap it to the left most item in the array
// then move to the second index

// swap function
function swap(i, j, array) {
  const temp = array[j];
  array[j] = array[i];
  array[i] = temp;
}

function selectionSort(array) {
  for (let i = 0; i < array.length; i++) {
    let lowest = i;
    for (let j = i + 1; j < array.length; j++) {
      // checking
      if (array[lowest] > array[j]) {
        lowest = j;
      }
    }
    if (i !== lowest) swap(i, lowest, array);
  }

  return array;
}

console.log(selectionSort([8, 5, 2, 9, 5, 6, 3]));
console.log(
  selectionSort([
    -4, 5, 10, 8, -10, -6, -4, -2, -5, 3, 5, -4, -5, -1, 1, 6, -7, -6, -7, 8,
  ])
);
console.log(selectionSort([]));
console.log(
  selectionSort([
    991, -731, -882, 100, 280, -43, 432, 771, -581, 180, -382, -998, 847, 80,
    -220, 680, 769, -75, -817, 366, 956, 749, 471, 228, -435, -269, 652, -331,
    -387, -657, -255, 382, -216, -6, -163, -681, 980, 913, -169, 972, -523, 354,
    747, 805, 382, -827, -796, 372, 753, 519, 906,
  ])
);
