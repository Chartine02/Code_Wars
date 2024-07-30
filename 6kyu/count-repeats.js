function countRepeats(str) {
  const arr = str.split("");
  const unique = arr.filter((el, i, arr) => el !== arr[i + 1]);
  return arr.length - unique.length;
}
