var bCol = 7;
var bRow = 8;
var board = [
    [0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0],
    [0, 0, 1, 0, 0, 0, 0],
    [0, 0, 1, 0, 0, 0, 0],
    [0, 0, 1, 0, 0, 0, 0],
    [0, 0, 1, 0, 0, 0, 0],
    [0, 0, 1, 1, 2, 1, 0]
];

var elBoard = document.querySelectorAll('table#move-the-box td');
var selBox = [];

function gravitation() {
    for ( let c=0; c<bCol; c++ ) {
        for ( let r=bRow-1; r>0; r-- ){
            if ( board[r][c] == 0 ) {
                let rB = -1;
                for ( let r1=r-1; r1>=0; r1-- ) {
                    if ( board[r1][c] > 0 ){
                        rB = r1; break;
                    }
                }
                if (rB > -1 ) {
                    board[r][c] = board[rB][c];
                    board[rB][c] = 0;
                }
            }
        }
    }
}

function drawBoard() {
    gravitation();

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


function boardClick(e) {
    
    let r = e.target.parentNode.rowIndex;
    let c = e.target.cellIndex;
    if (board[r][c] > 0) {
        selBox = [r, c];
    }

};

function moveUp() {
    console.log(selBox);
    if (selBox.length > 0 && selBox[0] > 0) {
        let r = selBox[0];
        let c = selBox[1];
        if (board[r - 1][c] == 0) {
            board[r - 1][c] = board[r][c];
            board[r][c] = 0;
        } else {
            let t = board[r][c];
            board[r][c] = board[r - 1][c];
            board[r - 1][c] = t;
        }
        selBox = [];
        drawBoard();
    }

}

function moveDown() {
    console.log(selBox);
    if (selBox.length > 0 && selBox[0] < bRow-1) {
        let r = selBox[0];
        let c = selBox[1];
        if (board[r + 1][c] == 0) {
            board[r + 1][c] = board[r][c];
            board[r][c] = 0;
        } else {
            let t = board[r][c];
            board[r][c] = board[r + 1][c];
            board[r + 1][c] = t;
        }
        selBox = [];
        drawBoard();
    }

}

function moveRight() {
    console.log(selBox);
    if (selBox.length > 0 && selBox[1] < bCol-1) {
        let r = selBox[0];
        let c = selBox[1];
        if (board[r][c + 1] == 0) {
            board[r][c + 1] = board[r][c];
            board[r][c] = 0;
        } else {
            let t = board[r][c];
            board[r][c] = board[r][c + 1];
            board[r][c + 1] = t;
        }
        selBox = [];
        drawBoard();
    }

}

function moveLeft() {
    console.log(selBox);
    if (selBox.length > 0 && selBox[1] > 0) {
        let r = selBox[0];
        let c = selBox[1];
        if (board[r][c - 1] == 0) {
            board[r][c - 1] = board[r][c];
            board[r][c] = 0;
        } else {
            let t = board[r][c];
            board[r][c] = board[r][c - 1];
            board[r][c - 1] = t;
        }
        selBox = [];
        drawBoard();
    }
}

drawBoard();