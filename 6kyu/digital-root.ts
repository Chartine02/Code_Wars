export const digitalRoot = (n: number): number => {
  let sum: string = n
    .toString()
    .split("")
    .reduce((a, b) => Number(a) + Number(b), 0)
    .toString();

  while (sum.toString().length > 1) {
    sum = sum
      .toString()
      .split("")
      .reduce((a, b) => Number(a) + Number(b), 0)
      .toString();
  }

  return +sum;
};
