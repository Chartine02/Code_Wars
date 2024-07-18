function sumOfIntegersInString(s) {
  let numbers = [];
  let currentNumber = "";

  for (let char of s) {
    if (!isNaN(char) && char !== " ") {
      currentNumber += char;
    } else if (currentNumber) {
      numbers.push(Number(currentNumber));
      currentNumber = "";
    }
  }

  if (currentNumber) {
    numbers.push(Number(currentNumber));
  }

  return numbers.length > 1
    ? numbers.reduce((a, b) => a + b)
    : Number(numbers.join());
}
