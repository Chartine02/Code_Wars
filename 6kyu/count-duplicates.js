function duplicateCount(text) {
  const occ = text
    .split("")
    .map((char) => (char = char.toLowerCase()))
    .reduce((acc, val) => {
      acc[val] = (acc[val] || 0) + 1;
      return acc;
    }, {});

  let count = 0;

  for (let key in occ) {
    if (occ[key] > 1) {
      count++;
    }
  }

  return count;
}
