// searching for a substring inside a string
// returns the amount of times substring appears in str
// time complexity = O(n*m)
// space complexity = O(1)
const stringSearch = (str, sub) => {
  let count = 0;
  for (let i = 0; i < str.length; i++) {
    for (let j = 0; j < sub.length; j++) {
      if (sub[j] !== str[i + j]) break;
      if (j === sub.length - 1) count++;
    }
  }
  return count;
};
console.log(stringSearch("lorie lolled", "lo")); //2
console.log(stringSearch("lorie lolled", "lol"));//1
console.log(stringSearch("lorie lolled", "l"));//4
console.log(stringSearch("", "lo"));//0
