var bCol = 7;
var bRow = 8;

var elBoard = document.querySelectorAll('table#move-the-box td');



var board = [
    [0, 0, 0, 1, 0, 0, 0],
    [0, 0, 0, 1, 0, 0, 0],
    [0, 0, 1, 2, 0, 0, 0],
    [0, 1, 2, 3, 0, 0, 0],
    [0, 2, 1, 4, 0, 0, 0],
    [0, 1, 5, 1, 0, 0, 0],
    [1, 3, 1, 1, 0, 0, 0],
    [5, 5, 3, 4, 4, 0, 0]
];

function drawBoard() {
    for (let r = 0; r < bRow; r++) { //всі рядки
        for (let c = 0; c < bCol; c++) { //всі стовпчики
            let i = bCol * r + c; // всі клітинки
            if (board[r][c] > 0) {
                elBoard[i].className = 'box-' + board[r][c];
            } else {
                elBoard[i].className = '';
            }
        }
    }


}





// var board = [
//     [0, 0, 0, 0, 0, 0, 0],
//     [0, 0, 0, 0, 0, 0, 0],
//     [0, 0, 1, 0, 0, 0, 0],
//     [0, 0, 1, 0, 0, 0, 0],
//     [0, 0, 2, 0, 0, 0, 0],
//     [0, 0, 2, 0, 0, 2, 0],
//     [0, 0, 1, 0, 1, 1, 0],
//     [0, 1, 2, 0, 2, 2, 0]
// ];