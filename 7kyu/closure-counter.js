function counter() {
  let value = 1;
  return function increase() {
    return value++;
  };
}
