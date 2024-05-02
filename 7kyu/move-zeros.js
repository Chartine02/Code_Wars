function move_zeros(arrNum, isRight = true) {
  const zeros = arrNum.filter((num) => num === 0);
  const nonZeros = arrNum.filter((num) => num !== 0);
  return !isRight ? zeros.concat(nonZeros) : nonZeros.concat(zeros);
}
