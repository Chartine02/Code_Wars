function deleteNth(arr, n) {
  const occ = {};
  let result = [];

  for (let i of arr) {
    occ[i] = (occ[i] || 0) + 1;
    occ[i] <= n ? result.push(i) : i;
  }

  return result;
}
