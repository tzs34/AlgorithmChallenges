const pawnOne = [5, 3]
const pawnTwo = [7, 2]
const pawnThree = [2, 1]
const pawnFour = [8, 7]
const bishop = [5, 4]

const bishopAndPawn = (bishop, pawn) => Math.abs(bishop[0] - pawn[0]) === Math.abs(bishop[1] - pawn[1]) 

console.log(` pawnOne can be taken by bishop ${bishopAndPawn(pawnOne, bishop)}`)
console.log(` pawnTwo can be taken by bishop ${bishopAndPawn(pawnTwo, bishop)}`)
console.log(` pawnThree can be taken by bishop ${bishopAndPawn(pawnThree, bishop)}`)
console.log(` pawnFour can be taken by bishop ${bishopAndPawn(pawnFour, bishop)}`)