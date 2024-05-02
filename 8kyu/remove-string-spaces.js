function noSpace(x) {
  let arr = x.split("");
  let result = arr.filter((word) => word !== " ");
  return result.join("");
}
