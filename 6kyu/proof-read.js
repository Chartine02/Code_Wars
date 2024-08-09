function proofread(str) {
  return str
    .toLowerCase()
    .replaceAll("ie", "ei")
    .split(" ")
    .map((word, i, arr) => {
      return i === 0 ||
        (arr[i - 1] && arr[i - 1][arr[i - 1].length - 1] === ".")
        ? word.charAt(0).toUpperCase() + word.slice(1)
        : word;
    })
    .join(" ");
}
