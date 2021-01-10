const attack = require('../functions/attack')
describe('Attack Function', () => {
  const grid = [ [ '-', '-', '-', '-', '-', '-', '-', '-' ],
  [ '-', '-', '-', '-', '-', '-', '-', '-' ],
  [ '-', '0', '-', '-', '-', '-', '-', '-' ],
  [ '-', '0', '-', '-', '-', '-', '-', '-' ],
  [ '-', '0', '-', '-', '-', '-', '-', '-' ],
  [ '-', '-', '-', '-', '-', '-', '-', '-' ],
  [ '-', '-', '-', '-', '-', '-', '-', '-' ],
  [ '-', '-', '-', '-', '-', '-', '-', '-' ] ]

  it('should return true on hits', () => {

    const actual = attack('b3', grid)
    expect(actual).toEqual(true);
  });
  it('should return false on misses', () => {

    const actual = attack('a1', grid);
    expect(actual).toEqual(false);
  });
});