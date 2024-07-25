function scramble(str1, str2) {
  const occStr1 = str1.split("").reduce((acc, val) => {
    acc[val] = (acc[val] || 0) + 1;
    return acc;
  }, {});

  const occStr2 = str2.split("").reduce((acc, val) => {
    acc[val] = (acc[val] || 0) + 1;
    return acc;
  }, {});

  for (let char in occStr2) {
    if (!occStr1[char] || occStr1[char] < occStr2[char]) {
      return false;
    }
  }

  return true;
}

console.log(scramble("rkqodlw", "world"));
console.log(scramble("cedewaraaossoqqyt", "codewars"));
console.log(scramble("katas", "steak"));
