function order(words) {
  const arr = words.split(" ");

  return arr
    .sort((a, b) => {
      a = a
        .split("")
        .filter((char) => !isNaN(Number(char)) && char !== " ")
        .join("");
      // console.log(a)

      b = b
        .split("")
        .filter((char) => !isNaN(Number(char)) && char !== " ")
        .join("");

      return a - b;
    })
    .join(" ");
}
