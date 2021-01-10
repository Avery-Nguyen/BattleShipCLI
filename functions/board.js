function createGrid () {
  let grid = [];
  for (let i = 0; i < 8; i++) {
    grid[i] = [];
    for (let j = 0; j < 8; j++) {
      grid[i][j]= '-'
    }
  }
  return grid;
}

module.exports = createGrid;