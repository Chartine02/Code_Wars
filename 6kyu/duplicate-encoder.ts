export function duplicateEncode(word: string) {
  let result = "";
  const arr = word.toLowerCase().split("");
  const occurrence = arr.reduce((acc, val) => {
    acc[val] = (acc[val] || 0) + 1;
    return acc;
  }, {} as { [key: string]: number });

  const newArr = arr.map((el) => {
    occurrence[el] > 1 ? (result += ")") : (result += "(");
  });

  return result;
}
