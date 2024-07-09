export function spinWords(words: string): string {
  const array = words
    .split(" ")
    .map((word) =>
      word.length >= 5 ? word.split("").reverse().join("") : word
    );
  return array.join(" ");
}
