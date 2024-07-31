function alphabetPosition(text) {
  text = text.replace(/[^a-zA-Z]/g, "");
  const arr = text.split("");

  return arr
    .map((el) => {
      el = el.toLowerCase();
      return el.charCodeAt(0) - "a".charCodeAt(0) + 1;
    })
    .join(" ");
}
