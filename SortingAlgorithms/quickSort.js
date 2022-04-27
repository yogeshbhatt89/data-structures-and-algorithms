// Like Merge Sort, QuickSort is a Divide and Conquer algorithm. It picks an element as pivot and partitions the given array around the picked pivot. There are many different versions of quickSort that pick pivot in different ways.

// Always pick first element as pivot.
// Always pick last element as pivot (implemented below)
// Pick a random element as pivot.
// Pick median as pivot.

// Time complexity O(n log n) best case

// O(log n) decompositions for the amount of times the array splits ? best case

// O(n) decompositions
// O(n) comparisons per decomposition

// Space complexity O(n)

function swap(array, i, j) {
  const temp = array[j];
  array[j] = array[i];
  array[i] = temp;
}

function pivot(arr, start=0, end=arr.length+1){
    var pivot = arr[start];
  var swapIdx = start;

  for(var i = start + 1; i <= end; i++){
    if(pivot > arr[i]){
      swapIdx++;
      swap(arr,swapIdx,i);
    }
  }
  swap(arr,start,swapIdx);
  return swapIdx;
}


function quickSort(arr, left = 0, right = arr.length -1){
    if(left < right){
        let pivotIndex = pivot(arr, left, right)
        //left
        quickSort(arr,left,pivotIndex-1);
        //right
        quickSort(arr,pivotIndex+1,right);
      }
     return arr;
}

console.log(quickSort([8, 5, 2, 9, 5, 6, 3]));
console.log(
  quickSort([
    -4, 5, 10, 8, -10, -6, -4, -2, -5, 3, 5, -4, -5, -1, 1, 6, -7, -6, -7, 8,
  ])
);
console.log(quickSort([]));
console.log(
  quickSort([
    991, -731, -882, 100, 280, -43, 432, 771, -581, 180, -382, -998, 847, 80,
    -220, 680, 769, -75, -817, 366, 956, 749, 471, 228, -435, -269, 652, -331,
    -387, -657, -255, 382, -216, -6, -163, -681, 980, 913, -169, 972, -523, 354,
    747, 805, 382, -827, -796, 372, 753, 519, 906,
  ])
);
