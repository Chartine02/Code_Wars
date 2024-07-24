function expand(number) {
  const result = number
    .toString()
    .split("")
    .map((el, i, arr) => {
      return el !== "0" ? `${el}${`0`.repeat(arr.length - 1 - i)}` : "";
    })
    .filter((el) => el !== "")
    .join(" + ");

  return result;
}

console.log(expand(12));
console.log(expand(42));
console.log(expand(70304));
