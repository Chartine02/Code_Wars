function bestFriend(txt, a, b) {
  const arr = txt.split("");
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === a) {
      if (arr[i + 1] !== b) return false;
    }
  }
  return true;
}

console.log(bestFriend("he headed to the store", "h", "e"));
console.log(bestFriend("zoo wee mama", "m", "a"));
console.log(bestFriend(("", "z", "h")));
console.log(bestFriend("abcdee", "e", "e"));
