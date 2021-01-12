const letterToNum = require('./letterToNum')

//figure out if the coord was a hit or not (return true or false) and shows console message
//replaces character in grid with the appropriate character based off of hit or miss.
function attack (coord, grid){
  let x = letterToNum(coord[0]); //horizontal
  let y = coord[1] - 1; //vertical

  if(grid[y][x] === '0'){
    grid[y][x] = '!';
    console.log('HIT')
    return true
  } else if (grid[y][x] === '-'){
    grid[y][x] = 'x';
    console.log('MISS')
    return false;
  } else {
    console.log('YOU HIT THE SAME SPOT')
    return false;
  };
};


module.exports = attack;