export function pyramid(n: number): Array<Array<Number>> {
  let result: number[][] = [];
  for (let i = 1; i <= n; i++) {
    result.push(new Array(i).fill(1));
  }
  return result;
}
