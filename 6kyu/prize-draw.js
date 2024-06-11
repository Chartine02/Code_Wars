"use strict";
function rank(st, we, n) {
  const normalize = st.toLowerCase().split("");
  const alphabetRanks = {};
  let rank = 1;
  [
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
    "g",
    "h",
    "i",
    "j",
    "k",
    "l",
    "m",
    "n",
    "o",
    "p",
    "q",
    "r",
    "s",
    "t",
    "u",
    "v",
    "w",
    "x",
    "y",
    "z",
  ].forEach((letter) => {
    alphabetRanks[letter] = rank;
    rank += 1;
  });
  let som = normalize;
  return normalize;
}

console.log(
  rank("COLIN,AMANDBA,AMANDAB,CAROL,PauL,JOSEPH", [1, 4, 4, 5, 2, 1], 4)
);
