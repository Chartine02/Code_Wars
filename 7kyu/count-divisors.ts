export function divisors(n: number) {
  const result: number[] = [];
  for (let i = 0; i < 500000; i++) {
    n % i === 0 ? result.push(i) : i;
  }
  return result.length;
}
