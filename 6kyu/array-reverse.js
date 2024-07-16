function selReverse(array, n) {
  if (n === 0) return array;
  let result = [];
  for (let i = 0; i < array.length; i += n) {
    result.push(array.slice(i, i + n).reverse());
  }
  return result.flat();
}
