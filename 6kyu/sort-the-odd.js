function sortArray(array) {
  let odd = array.filter((el) => el % 2 !== 0).sort((a, b) => a - b);
  array = array.map((el) => {
    return el % 2 !== 0 ? odd.shift() : el;
  });

  return array;
}

console.log(sortArray([7, 1]));
console.log(sortArray([5, 8, 6, 3, 4]));
console.log(sortArray([9, 8, 7, 6, 5, 4, 3, 2, 1, 0]));
