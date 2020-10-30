var ARRAYLENGTH = 16;
var MAXARRAY = 36;
var MINARRAY = 0;



// crea tanti quadratini
var easyElements= document.querySelector('.easy');
for(var i = 0 ; i < MAXARRAY; i++){
  var newSquare = document.createElement('div');
  newSquare.className = 'square';
  easyElements.appendChild(newSquare);
}
// creazione dei numeri
var arrPc = [];

while(arrPc.length < ARRAYLENGTH){
  var numberRandom = singleRandomNumber(MAXARRAY,MINARRAY);
  if(!isNumberArray(numberRandom, arrPc)){
    arrPc.push(numberRandom);
  }
}
console.log(arrPc);
var counterLoser=0
var newSquare = document.getElementsByClassName('square');
for(var i = 0; i < MAXARRAY; i++){
  newSquare[i].value = i;
  newSquare[i].addEventListener('click', function(event){
    var squareMines=parseInt(event.target.value);
    if(isNumberArray(squareMines,arrPc)){
      event.target.style.backgroundColor = 'red';
      counterLoser += 1;
    }else{
      event.target.style.backgroundColor = 'green';

    }
    if(counterLoser == 5){
      document.querySelector('.loser').innerHTML = 'HAI PERSO!';
    }
    console.log(counterLoser);
    document.querySelector('.mine').innerHTML ='Mine colpite: '+ counterLoser;
  })
}








// funzione per unico elemento
function isNumberArray(num , numArr){
  for(var i = 0; i < arrPc.length ; i++){
    if(num === numArr[i]){
      return true;
    }
  }
  return false;
}
// funzione per generare numeri casuali

function singleRandomNumber(MAXARRAY,MINARRAY){
  var random = Math.floor(Math.random()*(MAXARRAY - MINARRAY)+MINARRAY+1);
  return random;
}
