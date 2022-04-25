
// https://visualgo.net/en/sorting

// Bubble sort, sometimes referred to as sinking sort, is a simple sorting algorithm that repeatedly steps through the list,
// compares adjacent elements and swaps them if they are in the wrong order.

// Time complexity O(n^2)
// Space complexity O(1)

// compare if the value is larger than the next value in the array then swap

// Swap function takes in two indexes and swaps the values on those indexes
function swap(i, j, array) {
  const temp = array[j];
  array[j] = array[i];
  array[i] = temp;
}

function bubbleSort(array) {
  let fullSwap = array.length - 1;
  // finish variable to stop the while loop to continue once sorted
  let finish = false;
  while (finish === false) {
    finish = true;

    for (let i = 0; i < fullSwap; i++) {
      if (array[i] > array[i + 1]) {
        // using the Swap function to swap
        swap(i, i + 1, array);
        finish = false;
      }
    }
    fullSwap -= 1;
  }
  return array;
}

console.log(bubbleSort([8, 5, 2, 9, 5, 6, 3]));
console.log(
  bubbleSort([
    -4, 5, 10, 8, -10, -6, -4, -2, -5, 3, 5, -4, -5, -1, 1, 6, -7, -6, -7, 8,
  ])
);
console.log(bubbleSort([]));
console.log(
  bubbleSort([
    991, -731, -882, 100, 280, -43, 432, 771, -581, 180, -382, -998, 847, 80,
    -220, 680, 769, -75, -817, 366, 956, 749, 471, 228, -435, -269, 652, -331,
    -387, -657, -255, 382, -216, -6, -163, -681, 980, 913, -169, 972, -523, 354,
    747, 805, 382, -827, -796, 372, 753, 519, 906,
  ])
);
