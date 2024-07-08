// function smaller(nums) {
//   const result = [];
//   for (let i = 0; i < nums.length; i++) {
//     count = 0;
//     for (let j = i + 1; j < nums.length; j++) {
//       if (nums[j] < nums[i]) {
//         count++;
//       }
//     }
//     result.push(count);
//   }

//   return result;
// }

function smaller(nums) {
  return nums.map(
    (el, index) => nums.slice(index).filter((n) => n < el).length
  );
}

console.log(smaller([5, 4, 3, 2, 1]));
console.log(smaller([1, 2, 0]));
