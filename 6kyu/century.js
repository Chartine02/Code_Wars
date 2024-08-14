function whatCentury(year) {
  let century = year % 100 !== 0 ? Math.floor(year / 100) + 1 : year / 100;
  century = century.toString();
  const last =
    century[1] === "1"
      ? `st`
      : century[1] === "2"
      ? `nd`
      : century[1] === "3"
      ? `rd`
      : `th`;
  return century[0] !== "1" ? `${century}${last}` : `${century}th`;
}
