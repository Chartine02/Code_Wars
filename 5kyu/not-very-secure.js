function alphanumeric(string) {
  return string.match(/^[A-Za-z0-9]+$/) ? true : false;
}

console.log(alphanumeric("Mazinkaiser"));
console.log(alphanumeric("hello world_"));
console.log(alphanumeric("PassW0rd"));
console.log(alphanumeric("    "));
console.log(alphanumeric("Beylar  "));
