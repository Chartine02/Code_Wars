function showMe(yourID) {
  let arr = yourID.split("");
  let result;
  for (let i = 0; i < arr.length; i++) {
    arr[i] == " " ? (result = false) : (result = true);
  }
  return result;
}

console.log(showMe("Francis"));
console.log(showMe("Jean-Eluard"));
console.log(showMe("Le Mec"));
console.log(showMe("Bernard-Henry-Levy"));
console.log(showMe("Mémé Gertrude"));
