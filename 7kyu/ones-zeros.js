function decode(arr) {
  const str = arr.join("");
  return parseInt(str, 2);
}

console.log(decode([0, 0, 0, 1, 1, 1, 1, 1]));
console.log(decode([0, 0, 1, 0]));
console.log(decode([1, 1, 1, 1]));
console.log(decode([1, 0, 1, 1]));
