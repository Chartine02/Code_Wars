function toUnderscore(string) {
  return typeof str === "number"
    ? `${str}`
    : str
        .split("")
        .map((char, i) => {
          if (i === 0) {
            return char.toLowerCase();
          } else {
            return char === char.toUpperCase() && isNaN(char)
              ? `_${char.toLowerCase()}`
              : char;
          }
        })
        .join("");
}
