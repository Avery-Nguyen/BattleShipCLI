const prompt = require('prompt-sync')({sigint: true});
const createGrid = require('./functions/board')
const printBoard = require('./functions/printBoard')
const placeShip = require('./functions/placeShip')
const attack = require('./functions/attack')
const directVaild = require('./functions/directVaild')
const coordVaild = require('./functions/coordVaild')

//create boards
let p1Board = createGrid();
let p2Board = createGrid();
printBoard(p1Board, 'Player 1');
printBoard(p2Board, 'Player 2');

//setup of game
let p1Life = 3;
let p2Life = 3;
let p1Error = true;
let p2Error = true;

let p1Ship = prompt('Player 1, Enter Ship Coordinate (eg. B5):')
let p1Direction = prompt('Point ship: Up? Down? Left? Right?')

//error checking user inputs
while(p1Error){
  const coordErr = coordVaild(p1Ship);
  const directionErr = directVaild(p1Ship, p1Direction);
  if (coordErr){
    p1Ship = prompt('Please enter correct coordinates:')
  } else if (directionErr) {
    p1Direction = prompt('Cannot place shipoff the board, please try again: Up? Down? Left? Right?')
  }

  if(!coordErr && !directionErr) {
    p1Error = false;
  }
};

//once all errors are resolved, up player's board
placeShip(p1Ship,p1Direction, p1Board)
printBoard(p1Board, 'Player 1');
prompt('End turn? (hit enter)')
console.clear()

//player's 2 turn
printBoard(p2Board, 'Player 2');
const p2Ship = prompt('Player 2, Enter Ship Coordinate (eg. B5):')
const p2Direction = prompt('Point ship: Up? Down? Left? Right?')

//error checking user inputs
while(p2Error){
  const coordErr = coordVaild(p2Ship);
  const directionErr = directVaild(p2Ship, p2Direction);
  if (coordErr){
    p2Ship = prompt('Please enter correct coordinates:')
  } else if (directionErr) {
    p2Direction = prompt('Cannot place shipoff the board, please try again: Up? Down? Left? Right?')
  }

  if(!coordErr && !directionErr) {
    p2Error = false;
  }
};
//once all errors are resolved, up player's board
placeShip(p2Ship,p2Direction, p2Board)
printBoard(p2Board, 'Player 2');
prompt('End turn? (hit enter)')
console.clear()


//while loop for game
//attack other players board
while (p1Life > 0 && p2Life > 0){
  //player 1 turn
  printBoard(p2Board, 'Player 1', true);
  let p1attack = prompt ('Player 1: Enter Attack Coordinate')
  if(attack(p1attack,p2Board)){
    p2Life--;
  }
  if(p2Life <= 0){
    break;
  }
  prompt('End turn? (hit enter)')
  console.clear()
  //player 2 turn
  printBoard(p1Board, 'Player 2', true);
  let p2attack = prompt ('Player 2: Enter Attack Coordinate')
  if(attack(p2attack,p1Board)){
    p1Life--;
  }
  prompt('End turn? (hit enter)')
console.clear()
}

//once a player's life hits 0, ends game and annouces winner
console.clear()
if (p1Life === 0){
  console.log('You Sunk Player 1\'s Battleship')
  console.log('GAME OVER, PLAYER 2 WINS!!')
} else {
  console.log('You Sunk Player 2\'s Battleship')
  console.log('GAME OVER, PLAYER 1 WINS!!')
}
