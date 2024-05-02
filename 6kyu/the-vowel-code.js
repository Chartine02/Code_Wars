function encode(string) {
  return string
    .split("")
    .map((i) =>
      i === "a"
        ? 1
        : i === "e"
        ? 2
        : i === "i"
        ? 3
        : i === "o"
        ? 4
        : i === "u"
        ? 5
        : i
    )
    .join("");
}

function decode(string) {
  return string
    .split("")
    .map((i) =>
      i == 1
        ? "a"
        : i == 2
        ? "e"
        : i == 3
        ? "i"
        : i == 4
        ? "o"
        : i == 5
        ? "u"
        : i
    )
    .join("");
}
