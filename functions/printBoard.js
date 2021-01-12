//prints board onto the console (adding lables to the sides), and hides enemy ship during gameplay

const printBoard = (grid, player, enemyBoard = false) => {
  console.log(`~~~~~~~~~~~${player}~~~~~~~~~~~`)
  const header = '   A  B  C  D  E  F  G  H'
  console.log(header);
  for (let i = 0; i < grid.length; i++) {
    let rows = (i+1) + '  ';
    for (const cell of grid[i]) {
      if (enemyBoard && cell === '0'){
        rows += '-  ';
      } else {
        rows += cell+ '  ';
      }
    };
    console.log(rows);
  };
};

module.exports = printBoard;