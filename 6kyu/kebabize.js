function kebabize(str) {
  const result = str
    .split("")
    .filter((el) => isNaN(el))
    .map((el, i, w) => {
      return el == el.toUpperCase()
        ? `-${el.toLowerCase()}`
        : `${el.toLowerCase()}`;
    })
    .join("");

  return result[0] === "-" ? result.split("").slice(1).join("") : result;
}
