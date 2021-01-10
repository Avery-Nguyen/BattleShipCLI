const directVaild = require('../functions/directVaild')
const coordVaild = require('../functions/coordVaild')

describe('Vaildation functions', () => {
  it('should return true if too many characters are typed in', () => {
    expect(coordVaild('abcd')).toBe(true);
  });
  it('should return true if out of x-coord range', () => {
    expect(coordVaild('z3')).toBe(true);
  });
  it('should return true if out of y-coord range', () => {
    expect(coordVaild('a9')).toBe(true);
  });
  it('should return false if everything is correct', () => {
    expect(coordVaild('b5')).toBe(false);
  });

  it('should return true if direction is incorrectly typed in', () => {
    expect(directVaild('b5', 'middle')).toBe(true);
  });
  it('should return true if it cannot place ship in that direction', () => {
    expect(directVaild('h1', 'right')).toBe(true);
  });
  it('should return false if everything is correct', () => {
    expect(directVaild('h1', 'down')).toBe(false);
  });
});