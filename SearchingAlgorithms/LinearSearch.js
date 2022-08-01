// Linear search looks at each item once in a list at a time going forward or backward
//time complexity O(n) n = length of the array
// Space complexity  O(1)
const linearSearch = (array, val) => {
  let output = -1;
  for (let i = 0; i < array.length; i++) {
    if (array[i] === val) {
      return (output = i);
    }
  }
  return output;
};

console.log(linearSearch([1,3,6,4,99,234],3))
console.log(linearSearch([1,3,6,4,99,234],0))
console.log(linearSearch([1,3,6,4,99,234],234))
console.log(linearSearch(["cat","few","asdf","bat","here"],"here"))

