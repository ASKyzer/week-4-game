$(document).ready(function(){

//////////////////////
// Global Variable //
////////////////////

var wins = 0;
var losses = 0;
var totalValue = 0;
var randomNum;
var batzValue;
var kittyValue;
var penguinValue;
var keroppiValue;

////////////////
// Functions //
//////////////

// when the game is initialized
function startGame(){
  //i want the total value = 0

}
  //random number from 19-120 generated
  function randomNum(min,max){

    return Math.floor(Math.random()*(max-min+1)+min);
  }
  randomNum(19,120);

  //random values are assigned to characters between 1-12//
  function randomBatzValue(min,max){
    // random batz value
    return Math.floor(Math.random()*(max-min+1)+min);
  }
  randomBatzValue(1,12);

  function randomKittyValue(min,max){
    // random kitty value
    return Math.floor(Math.random()*(max-min+1)+min);
  }
  randomKittyValue(1,12);

  function randomPenguinValue(min,max){
    // random penguin value
    return Math.floor(Math.random()*(max-min+1)+min);
  }
  randomPenguinValue(1,12);

  function randomKeroppiValue(min,max){
    // random keroppivalue
    return Math.floor(Math.random()*(max-min+1)+min);
  }
  randomKeroppiValue(1,12);

  //your sum is set to zero


// playing the game

// click on a charactor to get random values

// that value is then printed on the screen

// click on another character to get another random values

// that value is then added to the first values

// if totalValue is less than randomNum, the game continues

// if totalValue is greater than randomNum, the game ends and losses++

// if totalValue === randomNum, win++

// when you win or lose, the game resets, but the wins and losses don't clear
function reset(){
  totalValue = 0;
  randomNum();
}
////////////////////
// FOR DEBUGGING //
//////////////////
console.log(randomNum(19,120));
console.log(randomBatzValue(1,12));
console.log(randomKittyValue(1,12));
console.log(randomPenguinValue(1,12));
console.log(randomKeroppiValue(1,12));



});
