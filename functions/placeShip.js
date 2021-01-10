const letterToNum = require('./letterToNum')

function placeShip(coord,direction, grid){
  let x = null; //horizontal
  let y = null; //vertical
  const orientation = direction.toUpperCase();

    x = letterToNum(coord[0]);
    y = coord[1] - 1;
    grid[y][x] ='0';

  if(orientation === 'UP'){

      grid[y-1][x] ='0';
      grid[y-2][x] ='0';

  } else if (orientation === 'DOWN'){

      grid[y+1][x] ='0';
      grid[y+2][x] ='0';

  } else if (orientation === 'LEFT'){

      grid[y][x-1] ='0';
      grid[y][x-2] ='0';

  }else if (orientation === 'RIGHT'){
      grid[y][x+1] ='0';
      grid[y][x+2] ='0';
  };

};

module.exports = placeShip;