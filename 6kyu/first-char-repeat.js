function firstDup(str) {
  const arr = str.split("");
  let result = [];
  arr.map((el) => {
    if (arr.indexOf(el) !== arr.lastIndexOf(el)) {
      result.push(el);
    }
  });

  return result[0];
}

console.log(firstDup("tweet"));
console.log(firstDup("like"));
console.log(firstDup("translator"));
console.log(firstDup("Ode to Joy"));
