// function sort(str) {
//   let words = [...str];
//   words = words.filter((el) => el !== " ");

//   //   let lowerCase = [];
//   //   let upperCase = [];
//   //   let char = [];
//   //   const specialChars = "!~@#$%^&*_-+=`|(){}[]:;\"'<>,.?/";
//   //   for (let word of words) {
//   //     !isNaN(word)
//   //       ? char.push(word)
//   //       : specialChars.includes(word)
//   //       ? char.push(word)
//   //       : word === word.toLowerCase()
//   //       ? lowerCase.push(word)
//   //       : word === word.toUpperCase()
//   //       ? upperCase.push(word)
//   //       : char.push(word);
//   //   }
//   //   lowerCase = lowerCase.sort();

//   //   upperCase = upperCase.sort();
//   //   char = char.sort((a, b) => a - b);
//   //   let result = lowerCase.concat(upperCase, char);
//   //   return result;

//   return words.sort((a, b) => a - b);
// }

function sort(str) {
  return [...str]
    .filter((el) => el !== " ")
    .sort((a, b) =>
      !Number(a)
        ? a.toLowerCase() < b.toLowerCase()
          ? -1
          : 1
        : a.localeCompare(b)
    )
    .join("");
}
console.log(sort("The cat sat on the mat"));
console.log(sort("“Happy 21st Birthday!”"));
