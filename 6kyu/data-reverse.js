// function dataReverse(data) {
//   let result = [];
//   let items = [];
//   for (let item of data) {
//     while (items.length < 8) {
//       items.push(item);
//     }
//     result.push(items);
//     items = [];

//     // continue;
//   }
//   return result.length;
// }
function dataReverse(data) {
  let result = [];
  let items = [];
  for (let i = data.length - 1; i >= 0; i--) {
    items.unshift(data[i]);
    if (items.length === 8) {
      result.push(items);
      items = [];
    }
  }
  return result.flat();
}

console.log(
  dataReverse([
    1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1,
    0, 1, 0, 1, 0, 1, 0,
  ])
);
