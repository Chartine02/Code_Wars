function simple(str) {
  let result = "";
  for (let i = 0; i < str.length; i++) {
    if (!isNaN(str[i])) {
      count = parseInt(str[i]);
    } else {
      result += str[i].repeat(count);
    }
  }
  return result;
}

console.log(simple("3D2a5d2f"));
console.log(simple("3abc"));
console.log(simple("3d332f2a"));
console.log(simple("abcde"));
console.log(simple("111"));
console.log(simple(""));
