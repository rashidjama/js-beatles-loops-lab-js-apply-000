

function theBeatlesPlay(musicians, instruments) {
  var array = [];
  for (let i = 0; i < musicians.length; i++) {
    for(let k=0; k<instruments.length;k++) {

    }
      array.push(`${musicians[i]} plays ${instruments[i]}`);
    }
  return array;
}
