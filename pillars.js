function pillars(numPill, dist, width) {
  if (numPill === 1) {
    return 0;
  }
  const firstDist = (numPill - 1) * dist * 100;
  const totalWidth = (numPill - 2) * width;
  let totalDist = firstDist + totalWidth;
  return totalDist;
}
