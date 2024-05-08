function makeMeSlow() {
  // This function is too fast!
  for (let x = 0; x < 10; ++x) {
    console.log(x);
  }
}
setInterval(() => makeMeSlow(), 5000);
