function findOutlier(integers) {
  let odd = [];
  let even = [];
  integers.map((el) => {
    el % 2 === 0 ? even.push(el) : odd.push(el);
  });
  return odd.length > even.length ? even[0] : odd.join[0];
}

console.log(findOutlier([160, 3, 1719, 19, 11, 13, -21]));
