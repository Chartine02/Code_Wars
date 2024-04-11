// Create a function that returns the sum of 2 numbers
const sum = (a, b) => {
  return a + b;
};
// console.log(sum(2,3))

//  Create a function that returns the product of 2 numbers.
const product = (a, b) => {
  return a * b;
};

//  Create a function that returns the difference of 2 numbers.
const diff = (a, b) => {
  return a - b;
};

// Create a function that returns the division of 2 numbers
const div = (a, b) => {
  return a / b;
};

const arr = [1, 2, 3, 4, 5];
const reverse = () => {
  for (let j = arr.length; j >= 0; j--) {
    console.log(arr[j]);
  }
};
// reverse()
//  Create a function that receives an array and returns the sum of all the elements inside that array.
let sumArr = arr.reduce((acc, num) => acc + num);
//  console.log(sumArr)

//  Create a function that receives an array and returns the greatest value inside that array
let maxNum = Math.max(...arr);

//  Create a function that receives an array and returns the smallest number from that array
let minNum = Math.min(...arr);
// console.log(minNum)

//  Create a function that receives an array of numbers and returns the average of the numbers
const avArr = (arr) => {
  var sum = arr.reduce((acc, num) => acc + num);
  return sum / arr.length;
};
// console.log(avArr(arr))

//  Create a function that combines two arrays into one single array.
//    Use the following arrays:
//     arrange = [a,b,c,d]
//     array to = [e,f,g]
let arr1 = ["a", "b", "c", "d"];
let arr2 = ["e", "f", "g"];
const combine = arr1.concat(arr2);
// console.log(combine)

// Create a function that displays a pattern like this:
// * * * * *
// * * * * *
// * * * * *
// * * * *

// const displayPattern = (rows,columns) => {
//     pattern = ''
//     for (let i= 0; i < rows ; i++){

//         for(let j = 0; j < columns; j++){
//             pattern += '* '
//             // return pattern
//         }
//         console.log(pattern)
//     }

// }
// displayPattern(4,5)

const displayPattern = (rows, columns) => {
  for (let i = 0; i < rows; i++) {
    let pattern = "";
    for (let j = 0; j < columns; j++) {
      pattern += "* ";
    }
    console.log(pattern);
  }
};
// displayPattern(4,5)

// 11.    Create a function that displays a pattern like this:
// 1 1 1 1
// 1 1 1
// 1 1
// 1
const displayNum = (rows) => {
  for (let i = rows; i > 0; i--) {
    let num = "";
    for (let j = 0; j < i; j++) {
      num += "1 ";
    }
    console.log(num);
  }
};

// displayNum(4)

const displayNum2 = (rows) => {
  for (let i = rows; i > 0; i--) {
    let num = "";
    for (let j = 0; j < i; j++) {
      num += "1 ";
    }
    console.log(num);
    let num2 = "";
    for (let k = 0; (k = rows); k++) {
      num2 += "0 ";
    }
  }
  console.log(num, num2);
};
// displayNum2(4)

// 15.    Given an array like this:
// var array = [1,3,4,3,7,8,0,12,19];
// Create a function to reverse the order of the elements inside the given array
var array = [1, 3, 4, 3, 7, 8, 0, 12, 19];
const reversedArr = array.reverse();
//  console.log(reversedArr)

// 16.    Given an array like this:
// var some numbers = [3,4,8,2,1,2,2,6,3,4];
// a.    Create a function to sort and arrange these elements of the array in ascending order.
// b.    Modify the first array to make sure that it will also display the last 3 numbers and the first 3 numbers in front of the sorted array
// c.    From the same sorted array, also display the first 3 numbers.
var numbers = [3, 4, 8, 2, 1, 2, 2, 6, 3, 4];
let firstThree = numbers.slice(-3);
// console.log(firstThree)
const ascending = numbers.sort((a, b) => a - b);
const newArr = (numbers) => {
  sortedArr = numbers.sort((a, b) => a - b);
  lastThree = numbers.slice(-3);
  firstThree = numbers.slice(0, 3);
  modifiedArr = lastThree.concat(firstThree, sortedArr);
  console.log(firstThree);
  console.log(modifiedArr);
};
// newArr(numbers)

// 17.    Create a function that determines the age classification of people:
// Bellow are classifications according to specific conditions:

//     MIMICRY:             0 - 12
//     SELF-DISCOVERY:     13 - 19
//     COMMITMENT:         20 - 45
//     LEGACY:            46 - Above

const classification = (age) => {
  if (age <= 12) {
    return "MIMICRY";
  }
  if (age < 13 || age <= 19) {
    return "SELF-DISCOVERY";
  }
  if (age < 20 || age <= 45) {
    return "COMMITMENT";
  }
  if (age > 46) {
    return "LEGACY";
  }
};
// console.log(classification(30))

// 18. Create a function that calculates the BMI of a person and returns the specific classification of a person according to the height and weight provided by a user.
// How to calculate Body Mass Index:
// BMI = weight(kg) / (height(m) x height(m))

const calcBmi = (weight, height) => {
  let BMI = weight / (height * height);
  console.log(BMI);
};

// calcBmi(25, 12)

// 19.    Create a function that counts the number of characters that make up a string.
// N.B: Add conditions that will make sure that spaces will not be counted in the number of characters.
// Example:
// For the string: “Hello World”
// The number of characters is 10
const count = () => {
  let str = "Hello World count";
  const countStr = str.split(" ").join("").length;
  console.log(countStr);
};
// count()

// 20.    Create a function that displays an even number between 1 and 100
const displayRandom = () => {
  randomNum = Math.floor(Math.random() * 100);
  evenNum = randomNum.filter((num) => num % 2 == 0);
  console.log(evenNum);
};
// displayRandom()

// 21.    Write a function that calculates the square of a number.
const squared = (num) => {
  return num ** 2;
};
// console.log(squared(9))

// 22.    Write a function that checks if a number is even.
const checkEeven = (num) => {
  return num % 2 == 0;
};
// console.log(checkEeven(2))

// 23.    Write a function that checks if a number is odd.
const checkOdd = (num) => {
  return num % 2 !== 0;
};
// console.log(checkOdd(11))

// 24.    Write a function that returns the maximum of two numbers.
const findMax = (num1, num2) => {
  return Math.max(num1, num2);
};
// console.log(findMax(8,19))

// 25.    Write a function that returns the minimum of two numbers.
const findMin = (num1, num2) => {
  return Math.min(num1, num2);
};

// 26.    Write a function that calculates the factorial of a number.
const factorial = (num) => {
  if (num === 0 || num === 1) {
    return 1;
  } else {
    return num * factorial(num - 1);
  }
};
console.log(factorial(4));

// 27.    Write a function that reverses a string.
const reversedStr = () => {
  str = "hello world";
  // return str.reverse()
};
reversedStr();
// 28.    Write a function that checks if a string is a palindrome.
// 29.    Create a function that displays odd numbers between 1 and 100
const oddNum = () => {
  let numbers = [];
  for (let i = 0; i < numbers.length; i++) {}
};
// 30.    Create a function that displays multiples of 5

const multiplesFive = (limit) => {
  for (let i = 1; i <= limit; i++) {
    if (i % 5 === 0) {
      console.log(i);
    }
  }
};

// console.log(multiplesFive(100))
// 31.    Create a function that returns the square root of a given number.

const squareRoot = (num) => {
  return Math.sqrt(num);
};
// 32.    Create a function that receives two numbers and returns the bigger number.

const biggerNum = (num1, num2) => {
  if (num1 > num2) {
    return num1;
  } else {
    return num2;
  }
};
// 33.    Create a function that receives a string and changes it into capital letters

const capitalStr = (str) => {
  return str.toUpperCase();
};

// 34.    Create a function called “stringModifier”. This function allows a user to provide a string, and then provide the position they want to modify, and a character to replace the modified one from the string. This function will receive 3 arguments the first argument will be a string, the second will be the position of a specific.
const stringModifier = (word, num1, num2) => {
  let str = "";
};

// 35.    Write a function that counts the number of vowels in a string.
function countVowels(str) {
  const vowels = "aeiouAEIOU";
  let count = 0;
  for (let char of str) {
    if (vowels.includes(char)) {
      count++;
    }
  }
  return count;
}
// console.log(countVowels('hello'))

// 36.    Write a function that counts the number of consonants in a string.
function countConsonants(str) {
  const vowels = "aeiouAEIOU";
  let count = 0;
  for (let char of str) {
    if (/[a-zA-Z]/.test(char) && !vowels.includes(char)) {
      count++;
    }
  }
  return count;
}

// console.log(countConsonants('hello'))

// 37.    Write a function that finds the index of a given character in a string.
function findIndex(str, char) {
  return str.indexOf(char);
}
// console.log(findIndex('hello', 'e'))

// 38.    Write a function that removes duplicates from an array.

function removeDuplicates(arr) {
  return arr.filter((value, index) => arr.indexOf(value) === index);
}

// console.log(removeDuplicates([1, 2, 2, 3, 4, 4]));
// 39.    Write a function that checks if a given value is present in an array.
function isInArray(arr, value) {
  return arr.includes(value);
}

// console.log(isInArray([1, 2, 3, 4, 5], 3));

// 40.    Write a function that squares each element of an array.
function squareElements(arr) {
  return arr.map((num) => num * num);
}

// console.log(squareElements([1, 2, 3, 4])); // Output: [1, 4, 9, 16]

// 41.    Write a function that returns the first n elements of an array.
function firstElements(arr, n) {
  return arr.slice(0, n);
}

// 42.    Write a function that removes the last element from an array.
function removeLastElement(arr) {
  arr.pop();
  return arr;
}
// console.log(removeLastElement([1, 2, 3, 4])); // Output: [1, 2, 3]
// 43.    Write a function that sorts an array of numbers in ascending order.
const sortedArr = (arr) => {
  arr.sort((a, b) => a - b);
};

// console.log(firstElements([1, 2, 3, 4, 5], 3));
// 44.    Write a function that checks if all elements in an array are positive.
const allPositive = (arr) => {
  for (let i = 0; i < arr.length; i++) {
    return arr[i] > 0;
  }
};

// allPositive(arr)

// 45.    Write a function that calculates the sum of the even numbers in an array.
function sumOfEvenNumbers(arr) {
  let sum = 0;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 === 0) {
      sum += arr[i];
    }
  }

  return sum;
}
//   const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
//   const result = sumOfEvenNumbers(numbers);

// 46. Calculate the sum of even numbers in an array
function sumOfEvenNumbers(arr) {
    return arr.reduce((sum, num) => num % 2 === 0 ? sum + num : sum, 0);
}

// 46. Convert an array of strings to uppercase
function convertToUppercase(arr) {
    return arr.map(str => str.toUpperCase());
}

// 47. Generate a random number between a given range
function generateRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

// 48. Calculate the Fibonacci sequence up to n numbers
function fibonacciSequence(n) {
    const sequence = [0, 1];
    for (let i = 2; i < n; i++) {
        sequence[i] = sequence[i - 1] + sequence[i - 2];
    }
    return sequence;
}

// 49. Check if an array is sorted in ascending order
function isAscending(arr) {
    return arr.every((el, index) => index === 0 || el >= arr[index - 1]);
}

// 50. Filter out negative numbers from an array
function filterNegativeNumbers(arr) {
    return arr.filter(num => num >= 0);
}

// 51. Calculate the square root of a number
function squareRoot(num) {
    return Math.sqrt(num);
}

// 53. Find the median of an array of numbers
function findMedian(arr) {
    const sortedArr = arr.slice().sort((a, b) => a - b);
    const middle = Math.floor(sortedArr.length / 2);
    return sortedArr.length % 2 === 0 ? (sortedArr[middle - 1] + sortedArr[middle]) / 2 : sortedArr[middle];
}

// 54. Capitalize the first letter of each word in a sentence
function capitalizeFirstLetter(sentence) {
    return sentence.split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
}

// 55. Check if a given year is a leap year
function isLeapYear(year) {
    return (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0;
}