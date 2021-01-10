const prompt = require('prompt-sync')({sigint: true});
const createGrid = require('./functions/board')
const printBoard = require('./functions/printBoard')
const placeShip = require('./functions/placeShip')
const attack = require('./functions/attack')

//create boards
let p1Board = createGrid();
let p2Board = createGrid();
printBoard(p1Board, 'Player 1');
printBoard(p2Board, 'Player 2');

//setup of game
let p1Life = 3;
let p2Life = 3;
const p1Ship = prompt('Player 1, Enter Ship Coordinate:')
const p1Direction = prompt('Point ship: Up? Down? Left? Right?')
placeShip(p1Ship,p1Direction, p1Board)
printBoard(p1Board, 'Player 1');
// console.clear()
const p2Ship = prompt('Player 2, Enter Ship Coordinate:')
const p2Direction = prompt('Point ship: Up? Down? Left? Right?')
placeShip(p2Ship,p2Direction, p2Board)
printBoard(p2Board, 'Player 2');
// console.clear()


//while loop for game
// attack other players board
// printBoard(p2Board, 'Player 1', true)
while (p1Life > 0 && p2Life > 0){
  //player 1 turn
  printBoard(p2Board, 'Player 1', true);
  let p1attack = prompt ('Player 1: Enter Attack Coordinate')
  if(attack(p1attack,p2Board )){
    p2Life--;
  }
  if(p2Life <= 0){
    break;
  }
  //player 2 turn
  printBoard(p1Board, 'Player 2', true);
  let p2attack = prompt ('Player 2: Enter Attack Coordinate')
  if(attack(p2attack,p1Board )){
    p1Life--;
  }

}

console.log('Game Over')