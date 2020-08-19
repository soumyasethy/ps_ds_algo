const { spiralOrder } = require("./src/arrays/spiral_matrix");
const { findMaxConsecutiveOnes } = require("./src/arrays/max_consecutive_ones");
const { checkIfExist } = require("./src/arrays/DoubleCheck");
const { validMountainArray } = require("./src/arrays/valid_mountain_array");
const { sortedSquares } = require("./src/arrays/Squares_of_a_Sorted_Array");

let array1 = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9]
];
console.log("spiral matrix ->", spiralOrder(array1));

let array2 = [1, 1, 0, 1, 1, 1];
console.log("findMaxConsecutiveOnes ->", findMaxConsecutiveOnes(array2));

let array3 = [7, 1, 14, 11];
console.log("checkIfExist ->", checkIfExist(array3));

let array4 = [0, 3, 2, 1];
console.log("validMountainArray->", validMountainArray[array4]);

let array5=[-4,-1,0,3,10];
console.log("sortedSquares->", sortedSquares(array5));
