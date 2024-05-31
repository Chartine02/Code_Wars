function atomicNumber(num) {
  let result = [];
  let shell = 1;
  while (num > 0) {
    electrons = 2 * shell ** 2;
    if (num >= electrons) {
      result.push(electrons);
    } else {
      result.push(num);
    }
    num -= electrons;
    shell++;
  }
  return result;
}
console.log(atomicNumber(11));
console.log(atomicNumber(18));
console.log(atomicNumber(29));
