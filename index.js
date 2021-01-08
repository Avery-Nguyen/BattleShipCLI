const createGrid = require('./board')

const grid = createGrid();

function printBoard (grid, enemy = false){
  const header = '   A  B  C  D  E  F  G  H'
  console.log(header);
  for (let i = 0; i < grid.length; i++) {
    let rows = i + '  ';
    for (const cell of grid[i]) {
      if (enemy && cell === 'O'){
        rows += '-  '
      } else {
        rows += cell+ '  ';
      }
    }
    console.log(rows)
  }
}

printBoard(grid);