// The idea of Radix Sort is to do digit by digit sort starting from least
// significant digit to most significant digit. Radix sort uses counting sort as a subroutine to sort.

// Time complexity O(nk)
//  n is number of number of integers sorting
// k is the length of those numbers

// Space complexity O(n+k)

function getDigit(num, i) {
  return Math.floor(Math.abs(num) / Math.pow(10, i)) % 10;
}

function digitCount(num) {
  if (num === 0) return 1;
  return Math.floor(Math.log10(Math.abs(num))) + 1;
}

function mostDigits(nums) {
  let maxDigits = 0;
  for (let i = 0; i < nums.length; i++) {
    maxDigits = Math.max(maxDigits, digitCount(nums[i]));
  }
  return maxDigits;
}

function radixSort(nums) {
  let maxDigitCount = mostDigits(nums);
  for (let k = 0; k < maxDigitCount; k++) {
    let digitBuckets = Array.from({ length: 10 }, () => []);
    for (let i = 0; i < nums.length; i++) {
      let digit = getDigit(nums[i], k);
      digitBuckets[digit].push(nums[i]);
    }
    nums = [].concat(...digitBuckets);
  }
  return nums;
}

console.log(radixSort([8, 5, 2, 9, 5, 6, 3]));
console.log(
  radixSort([
    -4, 5, 10, 8, -10, -6, -4, -2, -5, 3, 5, -4, -5, -1, 1, 6, -7, -6, -7, 8,
  ])
);
console.log(radixSort([]));
console.log(
  radixSort([
    991, -731, -882, 100, 280, -43, 432, 771, -581, 180, -382, -998, 847, 80,
    -220, 680, 769, -75, -817, 366, 956, 749, 471, 228, -435, -269, 652, -331,
    -387, -657, -255, 382, -216, -6, -163, -681, 980, 913, -169, 972, -523, 354,
    747, 805, 382, -827, -796, 372, 753, 519, 906,
  ])
);
