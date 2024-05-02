function well(x) {
  let n = 0;
  for (let i = 0; i < x.length; i++) {
    if (x[i] === "good") {
      n++;
    }
  }
  if (n === 0) {
    return "Fail!";
  } else if (n <= 2) {
    return "Publish!";
  } else {
    return "I smell a series    !";
  }
}
console.log(well(["good", "good", "good", "bad"]));
