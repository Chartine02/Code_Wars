export const high = (str: string): string => {
  const words = str.split(" ");

  let highestScore = 0;
  let highestScoringWord = "";

  for (const word of words) {
    let score = 0;

    for (const char of word) {
      score += char.charCodeAt(0) - "a".charCodeAt(0) + 1;
    }

    if (score > highestScore) {
      highestScore = score;
      highestScoringWord = word;
    }
  }

  return highestScoringWord;
};
