function moreZeros(s) {
  let binary = [];
  let result = [];

  for (let i = 0; i < s.length; i++) {
    binary.push(s.charCodeAt(i).toString(2));
  }

  binary.map((el) => {
    let char = el.split("");
    let zeros = char.filter((el) => el === "0").length;
    let ones = char.filter((el) => el === "1").length;
    return zeros > ones
      ? result.push(String.fromCharCode(parseInt(el, 2)))
      : "";
  });
  result = [...new Set(result)];
  return result;
}
console.log(moreZeros("abcde"));
console.log(moreZeros("DIGEST"));
console.log(moreZeros("Great job!"));
console.log(moreZeros("abcdeabcde"));
