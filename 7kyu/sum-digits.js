function sumDigits(number) {
  return Number(
    number
      .toString()
      .split("")
      .filter((el) => !isNaN(el))
      .reduce((a, b) => Number(a) + Number(b))
  );
}
