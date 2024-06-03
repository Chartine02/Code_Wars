// Your task is to write a function that takes two or more objects and returns a new object which combines all the input objects.

// All input object properties will have only numeric values. Objects are combined together so that the values of matching keys are added together.

// function combine(objA, objB) {
//   let result = {};
//   for (let keys in objA) {
//     for (let key in objB) {
//       if (objA.hasOwnProperty(keys)) {
//         if (objB.hasOwnProperty(keys)) {
//           result[keys] = Number(objA[keys]) + Number(objB[keys]);
//         } else {
//           result[key] = objB[key];
//           result[keys] = objA[keys];
//         }
//       }
//     }
//   }

//   return result;
// }

function combine(...objects) {
  let result = {};
  for (let obj of objects) {
    for (let key in obj) {
      if (result.hasOwnProperty(key)) {
        result[key] += obj[key];
      } else {
        result[key] = obj[key];
      }
    }
  }

  return result;
}

const objA = { a: 10, b: 20, c: 30 };
const objB = { a: 3, c: 6, d: 3 };
console.log(combine(objA, objB)); // Returns { a: 13, b: 20, c: 36, d: 3 }
