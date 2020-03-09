var animationCounter = 0;











function moveUp() {


}

function moveDown() {
    console.log(selBox);
    if (selBox.length > 0 && selBox[0] < bRow - 1) {
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
    if (selBox.length > 0 && selBox[1] < bCol - 1) {
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