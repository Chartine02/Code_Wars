export function uniqueInOrder(
  iterable: string | (string | number)[]
): (string | number)[] {
  const unique = typeof iterable === "string" ? iterable.split("") : iterable;
  return unique.filter((char, i, arr) => {
    return char !== arr[i + 1];
  });
}
