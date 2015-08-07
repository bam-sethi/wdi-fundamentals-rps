//Creates checkers board arrary of array with each cell having null value

var checkerboard = [[null,null,null,null,null,null,null,null],
                    [null,null,null,null,null,null,null,null],
                    [null,null,null,null,null,null,null,null],
                    [null,null,null,null,null,null,null,null],
                    [null,null,null,null,null,null,null,null],
                    [null,null,null,null,null,null,null,null],
                    [null,null,null,null,null,null,null,null],
                    [null,null,null,null,null,null,null,null]];
                    
//places a player at row or column on board when called with args                   

function setSquare(player, row, col) {
    
    checkerboard[row][col] = player;
    return checkerboard;
    
}

//returns player piece (r or b) at particular location, if no piece //returns null

function getPieceAt(row, col) {
    
    var player = checkerboard[row][col];
    
    return player;
    
}

// iterates over array for row and col resets the board to null

function clearBoard() {
    for(x = 0; x < 7; x += 1){
        for(y = 0; x <7; x += 1){
        checkerboard[x][y] === null;
        }
    }
    
}

//set up red or black pieces at starting position, internal for loop is to //mirror the pieces on middle row  


function setUpRed() {
    for(j = 0 ; j < 3; j += 1){
        if( j === 1){
            for(i = 1; i < 8; i += 2){
                checkerboard[j][i] = 'R';
            }
        } else {
            for(i =0 ; i < 8; i += 2){
                checkerboard[j][i] ='R';
            }
        }
    }
}




function setUpBlack() {
    for(j = 5 ; j < 8; j += 1){
        if( j === 6){
            for(i = 0; i < 8; i += 2){
                checkerboard[j][i] = 'B';
            }
        } else {  
            for(i =1 ; i < 8; i += 2){
                checkerboard[j][i] ='B';
            }
        }
    }
}

/*
//calling the functions to setup the board
setUpBlack();
setUpRed();
console.log(checkerboard)
*/


/*create a nested array called pieces to store the locations of every piece on the board.

pieces should be an associative array, with two keys : 'red' and 'black'. Each of these keys should correspond to a normal array listing out all of the different pieces for that color. Each piece should be represented as a two-element array in the pattern of [row,col]; for example, the list of red pieces would include [0,0], [0,2], [0,4], etc.
*/



var piece = { 
            'red': [[0,0],[0,2],[0,4],[0,6],
                        [1,1],[1,3],[1,5],[1,7],
                        [0,0],[0,2],[0,4],[0,6]],
                        
            'black': [[5,1],[5,3],[5,5],[5,7],
                        [6,0],[6,2],[6,4],[6,6],
                        [7,1],[7,3],[7,5],[7,7]]
    };
                
                

/*

///testing - returns true

  pieces['red'].map(function(piece){
      var row = piece[0];
      var col = piece[1];
      return checkerboard[row][col] === 'R';
    });

  pieces['black'].map(function(piece){
      var row = piece[0];
      var col = piece[1];
      return checkerboard[row][col] === 'B';
    });

*/












