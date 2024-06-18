function out(arr) {
  let odd = [];
  let even = [];
  arr.map((el) => {
    el % 2 === 0 ? even.push(el) : odd.push(el);
  });
  return odd.length > even.length ? even.join("") : odd.join();
}

console.log(out([2, 4, 0, 100, 4, 11, 2602, 36]));

function findOutlier(integers) {
  let odd = [];
  let even = [];
  integers.map((el) => {
    el % 2 === 0 ? even.push(el) : odd.push(el);
  });
  return odd.length > even.length ? even[0] : odd.join[0];
}

console.log(findOutlier([160, 3, 1719, 19, 11, 13, -21]));
