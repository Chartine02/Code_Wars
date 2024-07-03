function testEven(n) {
  return !Number.isInteger(n) ? false : n % 2 !== 0 ? false : true;
}

console.log(testEven(0));
console.log(testEven(0.5));
console.log(testEven(1));
console.log(testEven(-4));
