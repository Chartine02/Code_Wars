function findUniq(arr) {
  let result = arr.sort();
  return result[arr.length - 1] !== result[arr.length - 2]
    ? result[arr.length - 1]
    : result[0];
}

console.log(findUniq([1, 1, 1, 2, 1, 1]));
console.log(findUniq([0, 0, 0.55, 0, 0]));
console.log(findUniq([3, 3, 2, 3, 3]));
