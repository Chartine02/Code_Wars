function sumArray(array) {
  if (array == null || array.length <= 1 || array.length == undefined) {
    return 0;
  } else {
    let max = Math.max(...array);
    let min = Math.min(...array);
    let sum = array.reduce((acc, num) => acc + num, 0);
    let total = sum - (max + min);
    return total;
  }
}
