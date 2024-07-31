function moveZeros(arr) {
  return arr.filter((el) => el !== 0).concat(arr.filter((el) => el === 0));
}
