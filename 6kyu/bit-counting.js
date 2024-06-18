function count(int) {
  const bin = int.toString(2).split("");
  let arr = [];
  for (let i of bin) {
    arr.push(Number(i));
  }
  arr = arr.reduce((a, b) => a + b);
  return arr;
}

console.log(count(1234));
