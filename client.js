console.log('js');

let card0 = { //object literal syntax starts and ends w/ a curly brace
  suit: 'Hearts',
  number: 2
} // end card0

let card1 = {
  suit: 'Spades',
  number: 1
} // end card1


function isRed( cardToCheck){
  console.log('in isRed', cardToCheck);
  if (cardToCheck.suit === 'Hearts' || cardToCheck.suit === 'Diamonds'){
    return true;
  }
  else {
    return false;
  } //end if conditional
} // end isRed

console.log( isRed(card0) );
console.log( isRed(card1) );

// 1. declare the object card0
// 2. getting function ready
// 3. run the function
    // sends card0 to cardToCheck
    // sends back to console.log to print to console

//----NOW ADDING CARD 1----//

//TEST (from vid, for fun)
  //Write a function that receives two cards and returns the higher one

let card2 = {
  suit: 'Clubs',
  number: 7
} //end card2

let card3 = {
  suit: 'hearts',
  number: 12
} //end card3

  function highCard( cardA, cardB ){ //function to check for highter card
    if(cardA.number > cardB.number){
      return cardA;
    }
    else{
      return cardB;
    }
  }

  console.log('the high card is', highCard(card2, card3));
