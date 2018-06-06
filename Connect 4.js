function Connect4() {
    this.board = [
        [0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0],
    ]
    this.isGameWon = false;
    this.player = 1;
    
    this.check = function (_col, _row, _x, _y) {
        let x = _x;
        let y = _y;
        let col = _col;
        let row = _row;
        let score = 1;
        let pass = 0;
        while (true) {
            col += x;
            row += y;
            if (col < 0 || col > 6 || row < 0 || row > 5 || this.board[col][row] !== this.player) {
                if (pass === 0) {
                    x = -x;
                    y = -y;
                    col = _col;
                    row = _row;
                    pass++;
                } else {
                    if (score >= 4) {
                        this.isGameWon = true;
                    }
                    break;

                }
            } else {
                score++;
                console.log("score is " + score);
            }
        }

    }
}

Connect4.prototype.play = function (col) {
    if (this.isGameWon) return "Game has finished!";
    for (let row = 0; row <= 5; row++) {
        if (this.board[col][row] === 0) {
            this.board[col][row] = this.player;
            this.check(col, row, 1, 0);
            this.check(col, row, 0, 1);
            this.check(col, row, 1, 1);
            this.check(col, row, -1, 1);
            if (this.isGameWon) return "Player " + this.player + " wins!"
            let oldPlayer = this.player;
            this.player === 1 ? this.player = 2 : this.player = 1;
            console.log(this.board);
            return "Player " + oldPlayer + " has a turn"
        }
        if (row === 6) return "Column full!"
    }
}

let game = new Connect4;
