const { expect } = require('@jest/globals');
const createGrid = require('../board')

describe('createGrid', () => {
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