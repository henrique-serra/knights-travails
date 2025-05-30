import Knight from "./Knight.js";

const knight = new Knight();

// console.log(knight.possibleMoves());
console.log(knight.move([0,0], [3,3]));
console.log('---------------------------');
console.log(knight.move([3,3], [0,0]));
console.log('---------------------------');
console.log(knight.move([0,0], [7,7]));