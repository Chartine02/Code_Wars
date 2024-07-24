function narcissist(n) {
  const arr = n.toString().split("");
  const len = arr.length;
  const sumPowers = arr
    .map((num) => Number(num) ** len)
    .reduce((a, b) => Number(a) + Number(b));

  return n === sumPowers;
}

console.log(narcissist(153));
console.log(narcissist(1652));
