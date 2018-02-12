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

////////////////
// Functions //
//////////////

// when the game is initialized
function startGame(){
  //i want the total value = 0

}
  //random number from 19-120 generated

  numToReach = Math.floor(Math.random()*(maxCompNum-minCompNum+1)+minCompNum);
    // that value is then printed on the screen
  $('#ranNum').html(numToReach);

  batzValue = Math.floor(Math.random()*(maxCharNum-minCharNum+1)+minCharNum);

  kittyValue = Math.floor(Math.random()*(maxCharNum-minCharNum+1)+minCharNum);

  penguinValue = Math.floor(Math.random()*(maxCharNum-minCharNum+1)+minCharNum);

  keroppiValue = Math.floor(Math.random()*(maxCharNum-minCharNum+1)+minCharNum);

// to set everything back to zero
  function restart(){
    totalValue = 0;
    runningTotal = 0;
    numToReach = 0;
  }
// playing the game

// click on a charactor to get random values
$("#batz").on("click", function(){
  runningTotal = runningTotal+batzValue;
  $('#yourTotal').html(runningTotal);
})

$("#kitty").on("click", function(){
  runningTotal = runningTotal+kittyValue;
  $('#yourTotal').html(runningTotal);
})

$("#penguin").on("click", function(){
  runningTotal = runningTotal+penguinValue;
  $('#yourTotal').html(runningTotal);
})

$("#keroppi").on("click", function(){
  runningTotal = runningTotal+keroppiValue;
  $('#yourTotal').html(runningTotal);
})

function scoreComparison() {
  if ( runningTotal === numToReach) {
    win++;
    $('#wins').html(wins);
    restart();
  }
}




// click on another character to get another random values

// that value is then added to the first values

// if totalValue is less than randomNum, the game continues

// if totalValue is greater than randomNum, the game ends and losses++
function evaluateScores() {
    if (totalValue > numToReach) {
      losses++;
      alert("Better luck next time.")
      restart();
    }
  }

// if totalValue === randomNum, win++
    if (totalValue === numToReach) {
      wins++;
      alert("Congratulations!  You've won.");
      restart();
    }
    // when total value exceeds the random number

// when you win or lose, the game resets, but the wins and losses don't clear


////////////////////
// FOR DEBUGGING //
//////////////////

console.log(numToReach);
console.log(batzValue);
console.log(kittyValue);
console.log(penguinValue);
console.log(keroppiValue);


});
