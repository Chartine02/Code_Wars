function tailSwap(arr) {
  const [a, b] = arr;
  const [a1, a2] = a.split(":");
  const [b1, b2] = b.split(":");
  const swappedArray = [`${a1}:${b2}`, `${b1}:${a2}`];

  return swappedArray;
}
