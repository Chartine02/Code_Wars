function showMe(yourID) {
  const parts = yourID.split("-");
  console.log(parts);

  for (let part of parts) {
    console.log(part);
    if (part.length === 0 || part[0] !== part[0].toUpperCase()) {
      return false;
    }
    for (let i = 1; i < part.length; i++) {
      if (part[i] !== part[i].toLowerCase()) {
        return false;
      }
    }
  }

  return true;
}

console.log(showMe("Francis"));
console.log(showMe("Jean-Eluard"));
console.log(showMe("Le Mec"));
console.log(showMe("Bernard-Henry-Levy"));
console.log(showMe("Mémé Gertrude"));
