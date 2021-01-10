function lettersToNum (letter){
  const char = letter.toUpperCase();
  let result = null;
  switch (char) {
    case 'A':
      result = 0;
      break;
    case 'B':
      result = 1;
      break;
    case 'C':
      result = 2;
      break;
    case 'D':
      result = 3;
      break;
    case 'E':
      result = 4;
      break;
    case 'F':
      result = 5;
      break;
    case 'G':
      result = 6;
      break;
    case 'H':
      result = 7;
      break;
    default:
      result='error incorrect letter'
      break;
  }
  return result
};

module.exports = lettersToNum;