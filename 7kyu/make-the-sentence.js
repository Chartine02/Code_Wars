function makesTheSentence(characterArray, sentenceString) {
  let arr = sentenceString
    .split("")
    .filter((el) => el !== " ")
    .sort();
  characterArray = characterArray.sort();

  let diff = 0;
  for (let i = 0; i < characterArray.length; i++) {
    if (characterArray[i] !== arr[i]) {
      diff++;
    }
  }
  return diff !== 0 ? false : true;
}
console.log(makesTheSentence(["S", "h", "e", "a", "d", "s", "."], "She adds."));
console.log(
  makesTheSentence(
    [
      "m",
      "w",
      "a",
      "s",
      "y",
      "p",
      "h",
      ".",
      "a",
      "T",
      "T",
      "e",
      "h",
      "h",
      "i",
      "p",
      "p",
      "o",
    ],
    "The happy hippo swam."
  )
);
