String.prototype.camelCase = function () {
  return this.split(" ")
    .map((el) => (el.length < 1 ? "" : `${el[0].toUpperCase()}${el.slice(1)}`))
    .join("");
};
