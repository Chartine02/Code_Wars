function onlyDuplicates(str) {
  return str
    .split("")
    .filter((char) => str.indexOf(char) !== str.lastIndexOf(char))
    .join("");
}
