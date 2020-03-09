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
    [5, 5, 3, 4, 3, 0, 0]
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

function moveCells(s, d) {
    board[d[0]][d[1]] = board[s[0]][s[1]];
    board[s[0]][s[1]] = 0;
}

function swapCells(s, d) {
    let t = board[s[0]][d[1]];
    board[s[0]][s[1]] = board[d[0]][d[1]];
    board[d[0]][d[1]] = t;
}

function gravitation() {
    for (let c = 0; c < bCol; c++) {
        for (let r = bRow - 1; r > 0; r--) {
            if (board[r][c] == 0) {
                let rB = -1;
                for (let r1 = r - 1; r1 >= 0; r1--) {
                    if (board[r1][c] > 0) {
                        rB = r1;
                        break;
                    }
                }
                if (rB > -1) {
                    board[r][c] = board[rB][c];
                    board[rB][c] = 0;
                    moveBox([rB, c], [r, c]);
                }
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