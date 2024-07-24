function same(array1, array2) {
  if (!array1 || !array2 || array1.length !== array2.length) {
    return false;
  }
  //   const squares = a
  //     .map((el) => el ** 2)
  //     .map((el) => b.includes(el))
  //     .find((el) => el === false);
  //   return squares === undefined;

  const squares = array1.map((el) => el ** 2).sort((a, b) => a - b);
  const sortedArray2 = array2.sort((a, b) => a - b);

  return squares.every((el, index) => el === sortedArray2[index]);
}

console.log(
  same(
    [121, 144, 19, 161, 19, 144, 19, 11],
    [132, 14641, 20736, 361, 25921, 361, 20736, 361]
  )
);

console.log(
  same(
    [121, 144, 19, 161, 19, 144, 19, 11],
    [121, 14641, 20736, 361, 25921, 361, 20736, 361]
  )
);
