function buildFun(n) {
  var res = [];
  for (var i = 0; i < n; i++) {
    (function (index) {
      res.push(function () {
        return index;
      });
    })(i);
  }
  return res;
}
