var checkerboard = [[null,null,null,null,null,null,null,null],
                    [null,null,null,null,null,null,null,null],
                    [null,null,null,null,null,null,null,null],
                    [null,null,null,null,null,null,null,null],
                    [null,null,null,null,null,null,null,null],
                    [null,null,null,null,null,null,null,null],
                    [null,null,null,null,null,null,null,null],
                    [null,null,null,null,null,null,null,null]];
function setSquare(player, row, col) {
    
    checkerboard[row][col] = player;
    return checkerboard;
    
}

function getPieceAt(row, col) {
    
    var player = checkerboard[row][col];
    
    return player;
    
}
setSquare('R', 0, 5);
console.log(getPieceAt(1,5));
console.log(checkerboard);