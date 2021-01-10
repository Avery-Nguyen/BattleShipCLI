const letterToNum = require('./letterToNum')

function directVaild(coord, direction){
  const orientation = direction.toUpperCase();

  if(!(orientation==='UP' || orientation==='DOWN' || orientation==='LEFT' || orientation==='RIGHT')){
    return true;
  };

  let x = letterToNum(coord[0]);
  let y = coord[1] - 1;

  if(orientation === 'UP'){
    if(y <= 2){
      return true;
    }
  } else if (orientation === 'DOWN'){
    if (y >= 7){
      return true;
    }
  } else if (orientation === 'LEFT'){
    if (x <=2 ){
      return true;
    }
  }else if (orientation === 'RIGHT'){
    if (x >= 7){
      return true;
    }
  };


  return false; //no errors found
};

module.exports = directVaild;