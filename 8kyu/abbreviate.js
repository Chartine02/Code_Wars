function abbrevName(name) {
  let arr = name.toUpperCase().split(" ");
  let newName = [];
  for (i = 0; i < arr.length; i++) {
    newName.push(arr[i].slice(0, 1));
  }
  newName = newName.join(".");
  return newName;
}
