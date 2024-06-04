// function firstNSmallest(array, n) {
//   let result = new Array();
//   let newArr = [...array];

//   if (n === 0) {
//     return result;
//   } else {
//     let sorted = newArr.sort((a, b) => a - b);
//     for (let i = 0; i < n; i++) {
//       if (array.includes(newArr[i])) {
//         result.push(newArr[i]);
//       }
//     }
//   }

//   return newArr;
// }

function firstNSmallest(array, n) {
  if (n === 0) return [];
  while (array.length > n) {
    let max = Math.max(...array);
    array.splice(array.lastIndexOf(max), 1);
  }
  return array;
}

console.log(firstNSmallest([1, 2, 3, 5, 5], 3));
console.log(firstNSmallest([1, 2, 3, 4, 5], 0));
console.log(firstNSmallest([1, 2, 3, -4, 0], 3));
console.log(firstNSmallest([1, 2, 3, 4, 1], 3));
