function findOdd(arr) {
  let result = [];
  const counts = arr.reduce((acc, val) => {
    if (acc[val]) {
      acc[val]++;
    } else {
      acc[val] = 1;
    }
    return acc;
  }, {});
  for (let key in counts) {
    counts[key] % 2 !== 0 ? result.push(key) : counts[key];
  }
  return result;
}

console.log(findOdd([1, 2, 2, 3, 3, 3, 4, 3, 3, 3, 2, 2, 1]));
