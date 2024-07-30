function countFeelings(string, array) {
  let count = 0;
  const char = string.split("");
  const result = array.map((el) => {
    (el = el.split("").every((i) => char.includes(i))) ? count++ : "";
  });
  return `${count} feeling${count !== 1 ? "s" : ""}.`;
}
