const createGrid = require('../functions/board')
const printBoard = require('../functions/printBoard')
const placeShip = require('../functions/placeShip')

const directVaild = require('../functions/directVaild')
const coordVaild = require('../functions/coordVaild')
const lettersToNum = require('../functions/letterToNum')

const grid = [ [ '-', '-', '-', '-', '-', '-', '-', '-' ],
               [ '-', '-', '-', '-', '-', '-', '-', '-' ],
               [ '-', '-', '-', '-', '-', '-', '-', '-' ],
               [ '-', '-', '-', '-', '-', '-', '-', '-' ],
               [ '-', '-', '-', '-', '-', '-', '-', '-' ],
               [ '-', '-', '-', '-', '-', '-', '-', '-' ],
               [ '-', '-', '-', '-', '-', '-', '-', '-' ],
               [ '-', '-', '-', '-', '-', '-', '-', '-' ] ]

describe('Game Functions', () => {

  it('should place ship in up orientation', () => {
    placeShip('B5','up',grid);
    const expected = [ [ '-', '-', '-', '-', '-', '-', '-', '-' ],
                       [ '-', '-', '-', '-', '-', '-', '-', '-' ],
                       [ '-', '0', '-', '-', '-', '-', '-', '-' ],
                       [ '-', '0', '-', '-', '-', '-', '-', '-' ],
                       [ '-', '0', '-', '-', '-', '-', '-', '-' ],
                       [ '-', '-', '-', '-', '-', '-', '-', '-' ],
                       [ '-', '-', '-', '-', '-', '-', '-', '-' ],
                       [ '-', '-', '-', '-', '-', '-', '-', '-' ] ]
    expect(grid).toEqual(expected);
  });

  it('should convert A into 0', () => {
    const actual = lettersToNum('A');
    const expected = 0;
    expect(actual).toEqual(expected);
  });

});