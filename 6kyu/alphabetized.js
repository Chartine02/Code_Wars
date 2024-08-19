function alphabetized(s) {
  return s
    .split("")
    .filter((el) => el.toLowerCase() !== el.toUpperCase())
    .sort((a, b) => a.localeCompare(b, "en", { sensitivity: "base" }))
    .join("");
}
