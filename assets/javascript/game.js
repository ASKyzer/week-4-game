$(document).ready(function(){

//////////////////////
// Global Variable //
////////////////////

var wins = 0;
var losses = 0;
// randomly generated number of pokemons to collect
var numToReach;
// values of each character
var batzValues;
var kittyValue;
var penguinValue;
var keroppiValue;
// ninimum and maximum character values
var minCharNum = 1;
var maxCharNum = 12;
// ninimum and maximum computer values
var minCompNum = 19;
var maxCompNum = 120;
// to keep a log of
var runningTotal = 0;

// When the game starts, all the values are randomly generated but only the score to match is shown

  //random number from 19-120 generated
  numToReach = Math.floor(Math.random()*(maxCompNum-minCompNum+1)+minCompNum);
  // that value is then printed on the screen
  $('#monstersToCollect').html(numToReach);
  // randomly generated number of each character
  batzValue = Math.floor(Math.random()*(maxCharNum-minCharNum+1)+minCharNum);
  kittyValue = Math.floor(Math.random()*(maxCharNum-minCharNum+1)+minCharNum);
  penguinValue = Math.floor(Math.random()*(maxCharNum-minCharNum+1)+minCharNum);
  keroppiValue = Math.floor(Math.random()*(maxCharNum-minCharNum+1)+minCharNum);

////////////////
// FUNCTIONS //
//////////////

// to set all variables back to zero
  function restart(){

    $('#totalMonsters').html("0");

    runningTotal = 0;
    numToReach = Math.floor(Math.random()*(maxCompNum-minCompNum+1)+minCompNum);
      // that value is then printed on the screen
    $('#monstersToCollect').html(numToReach);

    batzValue = Math.floor(Math.random()*(maxCharNum-minCharNum+1)+minCharNum);
    kittyValue = Math.floor(Math.random()*(maxCharNum-minCharNum+1)+minCharNum);
    penguinValue = Math.floor(Math.random()*(maxCharNum-minCharNum+1)+minCharNum);
    keroppiValue = Math.floor(Math.random()*(maxCharNum-minCharNum+1)+minCharNum);

    ///////////////////
    // FOR DEBUGGING //
    //////////////////

    console.log(numToReach);
    console.log(batzValue);
    console.log(kittyValue);
    console.log(penguinValue);
    console.log(keroppiValue);

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

//////////////////////
// PLAYING THE GAME //
/////////////////////

  // click on a charactor to get random values //
  $("#dragon").on("click", function(){
    // adds the value of the character to the new total
    runningTotal = runningTotal + batzValue;
    // outputs to DOM
    $('#totalMonsters').html(runningTotal);
    // calls on the function to evaluate win or loss
    compareScore();
  })
  // the events below are the same as described above
  $("#wartortle").on("click", function(){
    runningTotal = runningTotal + kittyValue;
    $('#totalMonsters').html(runningTotal);
    compareScore();
  })

  $("#banette").on("click", function(){
    runningTotal = runningTotal + penguinValue;
    $('#totalMonsters').html(runningTotal);
    compareScore();
  })

  $("#kobra").on("click", function(){
    runningTotal = runningTotal + keroppiValue;
    $('#totalMonsters').html(runningTotal);
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
