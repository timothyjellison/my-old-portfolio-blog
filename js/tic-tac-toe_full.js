'use strict';
// some graphic settings
var playerColor = '#35e';
var computerColor = '#dd4';
// and some basic game variables
var playerTurn = true;
var moveCount = 0;
var gameover = false;

// objects to represent the nine blocks
// first the class
function Block (name, row, column){
  this.name = name;
  this.row = row;
  this.column = column;
  this.owner = 'none';
  this.owned = false;
}
// then the instances
var a = new Block('a',1,1);
var b = new Block('b',1,2);
var c = new Block('c',1,3);
var d = new Block('d',2,1);
var e = new Block('e',2,2);
var f = new Block('f',2,3);
var g = new Block('g',3,1);
var h = new Block('h',3,2);
var i = new Block('i',3,3);
// then put them all in an array
// to make them easy to iterate through
var blocks = [a,b,c,d,e,f,g,h,i];

// how to reset the board
function reset() {
  blocks.forEach(function(z){
    $('#'+z.name).css('background-color','#fff');
    $('#'+z.name).css('border-radius','0%');
    $('#'+z.name).css('transform','rotate(-360deg)');
    z.owned = false; 
    z.owner = 'none';
  });
  moveCount = 0;
  playerTurn = true;
}

// when the user 'marks' a block
$('.block').on('click', function(){
  if(moveCount === 0){
    $('.announcements').fadeOut('slow', function(){
      $(this).text('');
      $(this).fadeIn('fast');
    });
  }
  if(playerTurn){
    gameover = true ? false : true;
    markBlock(this);
    computerTurn();
  }
  if (moveCount == 9) {
    setTimeout(function(){reset();}, 2000);
  }
});

// how the computer chooses and 'marks' a block
function computerTurn(){
  var moveIsMade = false;
  function readSet(setNumber, setType){
    var criteria = blocks.filter(function(block){
      return block[setType] == setNumber;
    });
    return criteria;
  }
  
  if (e.owned === false){
    if (playerTurn === false && moveIsMade === false){
      moveIsMade = true;
      setTimeout(function(){
        markBlock('#e');
      },1000);
    }
  } 
  
  function assessField(threatLevel, opportunityLevel) {
    var numbers = [1,2,3];
    numbers.forEach(function(number){
      var sets = ['row','column'];
      sets.forEach(function(set){
        var threat = 0;
        var opportunity = 0;
        readSet(number, set).forEach(function(item){      
          if (item.owned === false){
            opportunity++;
          } else if (item.owner === 'player'){
            threat++;
          }
        });
        if (threat == threatLevel && opportunity == opportunityLevel){
          var toMark = readSet(number,set).filter(function(item){
            return item.owned === false;
          });
          if (playerTurn === false && moveIsMade === false){
            moveIsMade = true;
            setTimeout(function(){
            markBlock('#' + toMark[0].name);
            },1000);
          }
        } 
      });
    });
    
    function readDiagonals(diagonalSet){
      var threat = 0;
      var opportunity = 0;
      diagonalSet.forEach(function(item){      
        if (item.owned === false){
          opportunity++;
        } else if (item.owner === 'player'){
          threat++;
        }
      });
      if (threat == threatLevel && opportunity == opportunityLevel){
        var toMark = diagonalSet.filter(function(item){
          return item.owned === false;
        });
        if (playerTurn === false && moveIsMade === false){
          moveIsMade = true;
          setTimeout(function(){
          markBlock('#' + toMark[0].name);
          }, 1000);
        }
      }       
    }
    readDiagonals([a,e,i]);
    readDiagonals([c,e,g]); 
  }
  assessField(0,1);
  assessField(2,1);
  if (moveCount < 9 && !gameover && moveIsMade === false){
    setTimeout(function(){
      var blockToMark = blocks.filter(function(x){
        return x.column == randomColumn;
      }).filter(function(y){
        return y.row == randomRow;
      });

      do {
        var randomColumn = Math.floor(Math.random() * 3) + 1;
        var randomRow = Math.floor(Math.random() * 3) + 1;
      } while (blockToMark[0].owned);
      markBlock('#' + blockToMark[0].name);    
    }, 1000);    
  } 
  if (moveCount == 9) {
    setTimeout(function(){reset();}, 2000);
  }
}

// how a block is 'marked'
function markBlock(whichBlock){
  // the visual presentation of 'marking' 
  function markGraphic(whichBlock, whoseColor){
    $(whichBlock).css('background-color', whoseColor);
    $(whichBlock).css('transform','rotate(360deg');
    $(whichBlock).css('border-radius','50%');  
  }
  // the logical representation of 'marking'
  var blockSelected = blocks.filter(function(block){
    return block.name == $(whichBlock).attr('id');
  });
  if (!blockSelected[0].owned) {
    if (playerTurn){
      playerTurn = !playerTurn;
      blockSelected[0].owned = true;
      blockSelected[0].owner = 'player';
      markGraphic(whichBlock, playerColor);
    } else {
      playerTurn = !playerTurn;
      blockSelected[0].owned = true;
      blockSelected[0].owner = 'computer';
      markGraphic(whichBlock, computerColor);
    }    
  }
  moveCount++;
  checkForWin();
}

// how to test if a player has one
function checkForWin() {
  // when a winner is found...
  function announceWinner(winner){
    gameover = true;
    setTimeout(function(){
      if (winner === 'player') {
        $('.announcements').text('You win!');  
      } else if (winner === 'computer') {
        $('.announcements').text('You lose :-(');  
      }    
      reset();      
    }, 900);
  }
  // search columns and rows for a winner
  function readSet(setNumber, setType){
    var criteria = blocks.filter(function(block){
      return block[setType] == setNumber;
    });
    if (criteria[0].owner == 'player' && criteria[0].owned && criteria[1].owned && criteria[2].owned && criteria[0].owner == criteria[1].owner && criteria[1].owner == criteria[2].owner) {
      announceWinner('player');
    } else if (criteria[0].owner == 'computer' && criteria[0].owned && criteria[1].owned && criteria[2].owned && criteria[0].owner == criteria[1].owner && criteria[1].owner == criteria[2].owner) {
      announceWinner('computer');
    }
  }
  // search diagonals for a winner
  function readDiagonals(whichPlayer){
    if (e.owner == whichPlayer) {
      if (a.owner == e.owner && i.owner == e.owner){
        announceWinner(whichPlayer);
      } else if (c.owner == e.owner && g.owner == e.owner){
        announceWinner(whichPlayer);
      }
    }
  }
  // run the tests
  var j = 1;
  while (j <= 3){
    readDiagonals('player');
    readDiagonals('computer');
    readSet(j, 'row');
    readSet(j, 'column');
    j++;
  }
}