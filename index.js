// 1
function filter_list(l) {
  return l.filter((n) => typeof n === "number");
}
//   2
function multiply(number) {
  return number * Math.pow(5, Math.abs(number).toString().length);
}
//   3
function evenOrOdd(number) {
  if (number % 2 === 0) {
    return "Even";
  } else {
    return "Odd";
  }
}
//   4
function sum(numbers) {
  add = numbers.length > 0 ? numbers.reduce((a, b) => a + b) : 0;
  return add;
}

//   5
function replace(s) {
  const vowels = ["i", "u", "o", "a", "e", "I", "U", "O", "A", "E"];
  let newWord = "";
  for (let i = 0; i < s.length; i++) {
    vowels.includes(s[i]) ? (newWord += "!") : (newWord += s[i]);
  }
  return newWord;
}
//   6
function removeExclamationMarks(s) {
  return s.replace(/!/g, "");
}
//   7
function smash(words) {
  return words.join(" ");
}
//  8
function cockroachSpeed(s) {
  speed = s * 27.7778;
  newSpeed = Math.floor(speed);
  return newSpeed;
}
