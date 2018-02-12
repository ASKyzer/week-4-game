$(document).ready(function(){

//////////////////////
// Global Variable //
////////////////////

var wins = 0;
var losses = 0;
var totalValue = 0;
var numToReach;
// values of each character
var batzValue;
var kittyValue;
var penguinValue;
var keroppiValue;
// ninimum and maximum character values
var minCharNum = 1;
var maxCharNum = 12;
// ninimum and maximum computer values
var minCompNum = 19;
var maxCompNum = 120;
var runningTotal = 0;

// When the game starts, all the values are randomly generated but only the score to match is shown

  //random number from 19-120 generated
  numToReach = Math.floor(Math.random()*(maxCompNum-minCompNum+1)+minCompNum);
  // that value is then printed on the screen
  $('#ranNum').html(numToReach);

  batzValue = Math.floor(Math.random()*(maxCharNum-minCharNum+1)+minCharNum);
  kittyValue = Math.floor(Math.random()*(maxCharNum-minCharNum+1)+minCharNum);
  penguinValue = Math.floor(Math.random()*(maxCharNum-minCharNum+1)+minCharNum);
  keroppiValue = Math.floor(Math.random()*(maxCharNum-minCharNum+1)+minCharNum);

// to set all variables back to zero
  function restart(){

    totalValue = 0;
    runningTotal = 0;
    numToReach = Math.floor(Math.random()*(maxCompNum-minCompNum+1)+minCompNum);
      // that value is then printed on the screen
    $('#ranNum').html(numToReach);

    batzValue = Math.floor(Math.random()*(maxCharNum-minCharNum+1)+minCharNum);
    kittyValue = Math.floor(Math.random()*(maxCharNum-minCharNum+1)+minCharNum);
    penguinValue = Math.floor(Math.random()*(maxCharNum-minCharNum+1)+minCharNum);
    keroppiValue = Math.floor(Math.random()*(maxCharNum-minCharNum+1)+minCharNum);
  };

// Comparing the score to see who Wins
function compareScore() {
  if (runningTotal == numToReach) {
    alert("Congratulations!  You've won this round.");
    wins++;
    $('#wins').html(wins);
    restart();
  }
    else if (runningTotal > numToReach){
      alert("Sorry!  Better luck next time.");
      losses++;
      $('#losses').html(losses);
      restart();
    }
};

// playing the game

// click on a charactor to get random values //
$("#batz").on("click", function(){
  runningTotal = runningTotal + batzValue;
  $('#yourTotal').html(runningTotal);  // outputs to DOM
  compareScore();
})

$("#kitty").on("click", function(){
  runningTotal = runningTotal + kittyValue;
  $('#yourTotal').html(runningTotal);
  compareScore();
})

$("#penguin").on("click", function(){
  runningTotal = runningTotal + penguinValue;
  $('#yourTotal').html(runningTotal);
  compareScore();
})

$("#keroppi").on("click", function(){
  runningTotal = runningTotal + keroppiValue;
  $('#yourTotal').html(runningTotal);
  compareScore();
})




////////////////////
// FOR DEBUGGING //
//////////////////

console.log(numToReach);
console.log(batzValue);
console.log(kittyValue);
console.log(penguinValue);
console.log(keroppiValue);


});
