function indexOfZero(arr) {
  let maxCount = 0;
  let maxIndex = 0;
  let prevZero = -1;
  let prevPrevZero = -1;

  for (let i = 0; i < arr.length; ++i) {
    if (arr[i] == 0) {
      if (i - prevPrevZero > maxCount) {
        maxCount = i - prevPrevZero;
        maxIndex = prevZero;
      }

      prevPrevZero = prevZero;
      prevZero = i;
    }
  }
  if (arr.length - prevPrevZero > maxCount) maxIndex = prevZero;

  return maxIndex;
}

console.log(
  indexOfZero([1, 0, 1, 1, 1, 0, 1, 1, 1, 1, 0, 1, 1, 1, 1, 0, 0, 1, 1])
);
console.log(indexOfZero([1, 1, 1, 1, 0]));

// console.log(
//
// returns -1.
function maxOnesIndex(arr) {
  let max_count = 0;
  let max_index = 0;
  let prev_zero = -1;
  let prev_prev_zero = -1;

  for (let curr = 0; curr < arr.length; ++curr) {
    if (arr[curr] == 0) {
      if (curr - prev_prev_zero > max_count) {
        max_count = curr - prev_prev_zero;
        max_index = prev_zero;
      }

      prev_prev_zero = prev_zero;
      prev_zero = curr;
    }
  }
  if (n - prev_prev_zero > max_count) max_index = prev_zero;

  return max_index;
}

// Driver code
let arr = [1, 1, 0, 0, 1, 0, 1, 1, 1, 0, 1, 1, 1];
let n = arr.length;
console.log("Index of 0 to be replaced is " + maxOnesIndex(arr));
console.log(
  maxOnesIndex([1, 0, 1, 1, 1, 0, 1, 1, 1, 1, 0, 1, 1, 1, 1, 0, 0, 1, 1])
);
console.log(maxOnesIndex([1, 1, 1, 1, 0]));

// This code is contributed by divyesh072019
