function coordVaild(coord){
  if((coord.length < 0) || (coord.length > 2)){
    return true;
  };
  const letter = coord[0].toUpperCase();
  if (!(letter === 'A' || letter === 'B' || letter === 'C' || letter === 'D' || letter === 'E' || letter === 'F' || letter === 'G' || letter === 'H')) {
    console.log('from letter')
    return true;
  };

  if(!(coord[1] === '1' || coord[1] === '2' || coord[1] === '3' || coord[1] === '4' || coord[1] === '5' || coord[1] === '6' || coord[1] === '7' || coord[1] === '8')){
    console.log('from num')
    return true;
  };
  return false; //no errors found
};

module.exports = coordVaild;