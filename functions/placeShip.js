const letterToNum = require('./letterToNum')

function placeShip(coord,direction, grid){
  let x = null; //horizontal
  let y = null; //vertical
  const orientation = direction.toUpperCase();
  if(!coord.length < 0 || !coord.length > 2){
    console.log('error');
  } else {
    x = letterToNum(coord[0]);
    y = coord[1] - 1;
    grid[y][x] ='0';

  if(orientation === 'UP'){
    if(y <= 2){
      console.log('error');
    } else {
      grid[y-1][x] ='0';
      grid[y-2][x] ='0';
    };
  } else if (orientation === 'DOWN'){
    if (y >= 7){
      console.log('error')
    } else {
      grid[y+1][x] ='0';
      grid[y+2][x] ='0';
    };
  } else if (orientation === 'LEFT'){
    if (x <=2 ){
      console.log('error')
    } else {
      grid[y][x-1] ='0';
      grid[y][x-2] ='0';
    };
  }else if (orientation === 'RIGHT'){
    if (x >= 7){
      console.log('error')
    } else {
      grid[y][x+1] ='0';
      grid[y][x+2] ='0';
    };
  };
  };
};

module.exports = placeShip;