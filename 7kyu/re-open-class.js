String.prototype.myNewMethod = function () {
  return this.toUpperCase();
};

const cash = new String();
console.log("cash".myNewMethod());
