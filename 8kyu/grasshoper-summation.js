var summation = function (num) {
  let arr = [];
  let sum = 0;
  for (let i = 1; i <= num; i++) {
    arr.push(i);
    sum = arr.reduce((a, b) => a + b);
  }
  return sum;
};
