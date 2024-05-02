function squareSum(numbers) {
  sum = numbers.reduce((acc, val) => acc + val * val, 0);
  return sum;
}
