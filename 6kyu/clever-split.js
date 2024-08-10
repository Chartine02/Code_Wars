function splitter(str) {
  return str.match(/\[[^\]]*\]|\S+/g);
}

console.log(splitter("Buy a !car [!red green !white] [cheap or !new]"));
console.log(splitter("!Learning !javascript is [a joy]"));
console.log(splitter("[Cats and dogs] are !beautiful and [cute]"));
