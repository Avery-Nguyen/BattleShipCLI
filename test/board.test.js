const { expect } = require('@jest/globals');
const createGrid = require('../functions/board')

describe('creating the board', () => {
  const expected = [ [ '-', '-', '-', '-', '-', '-', '-', '-' ],
                     [ '-', '-', '-', '-', '-', '-', '-', '-' ],
                     [ '-', '-', '-', '-', '-', '-', '-', '-' ],
                     [ '-', '-', '-', '-', '-', '-', '-', '-' ],
                     [ '-', '-', '-', '-', '-', '-', '-', '-' ],
                     [ '-', '-', '-', '-', '-', '-', '-', '-' ],
                     [ '-', '-', '-', '-', '-', '-', '-', '-' ],
                     [ '-', '-', '-', '-', '-', '-', '-', '-' ] ]
  const actual = createGrid()
  it('should be an empty starting board', () => {
    expect(actual).toEqual(expected);
  });

});