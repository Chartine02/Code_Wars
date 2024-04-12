function getCount(str) {
  let arr = str.toLowerCase().split("");
  let vowels = ["a", "e", "i", "o", "u"];
  let count = arr.filter((char) => vowels.includes(char)).length;
  return count;
}
