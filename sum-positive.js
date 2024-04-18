function positiveSum(arr) {
  let newArr = arr.filter((num) => num > 0);
  return newArr.length > 0 ? newArr.reduce((a, b) => a + b) : 0;
}
console.log(positiveSum([2, -3, 5]));
