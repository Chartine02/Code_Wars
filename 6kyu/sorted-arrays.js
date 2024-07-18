function nthSmallest(...arrays) {
  let newArr = [];
  let n;
  for (let i of arrays) {
    typeof i !== "number" ? newArr.push(i) : (n = i);
  }

  let result = newArr.flat().sort((a, b) => a - b);
  return result[n - 1];
}
