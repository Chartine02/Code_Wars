var callbacks = [];
function createFunctions(n) {
  for (var i = 0; i < n; i++) {
    callbacks.push(function () {
      return i;
    });
  }

  return callbacks;
}
createFunctions(5);
console.log(callbacks[0]());
