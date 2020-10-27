let isX = true;
let isValid = false;
let cells = [];
let player = 1;
let computer = 0;
let currentPlayer = 1;
let result = '';
let intervalId;

$(document).ready(() => {
    $('#dialog').dialog({
        resizable: false,
        height: 160,
        modal: true,
        buttons: {
            X() {
                isX = true;
                $(this).dialog('close');
                startGame();
            },
            O() {
                isX = false;
                $(this).dialog('close');
                startGame();
            }
        }
    });
});

function startGame() {
    emptyCells();
    if (isX) {
        player = 1;
        computer = 0;
    } else {
        player = 0;
        computer = 1;
    }

    const rnd = Math.round(Math.random());
    if (rnd === 1) {
        currentPlayer = player;
    } else {
        currentPlayer = computer;
    }
    intervalId = setInterval(loop, 100);
}

function loop() {
    if (currentPlayer === player) {
        isValid = true;
    } else {
        computerMove();
        currentPlayer = player;
    }

    $('.cell').on('click', function() {
        if (isValid) {
            const sign = player === 0 ? 'O' : 'X';

            const i = $(this).attr('id')[1] - 1;
            const j = $(this).attr('id')[2] - 1;
            if (cells[i][j] === -1) {
                cells[i][j] = player;
                $(this).html(sign);
                isValid = false;
                if (!whoWon(cells)) {
                    currentPlayer = computer;
                }
            }
        }
    });

    const winner = whoWon(cells);
    if (winner) {
        if (winner === 'computer') {
            alert('You Lost, Better Luck Next Time.');
        } else {
            alert('Congratulations! You Won.');
        }
        result = winner;
    } else if (isTableFull(cells)) {
        result = 'Tie';
        alert('Its a tie');
    }
    if (result !== '') {
        clearInterval(intervalId);
        result = '';
        cells = [];
        clearTable();
        startGame();
    }
}

function isTableFull(cells) {
    for (const i in cells) {
        for (const j in cells[i]) {
            if (cells[i][j] === -1) {
                return false;
            }
        }
    }
    return true;
}

function whoWon(cells) {
    //horizontal match
    for (var i in cells) {
        if (
            cells[i][0] !== -1 &&
            cells[i][1] !== -1 &&
            cells[i][2] !== -1 &&
            cells[i][0] === cells[i][1] &&
            cells[i][0] === cells[i][2]
        ) {
            if (cells[i][0] === player) {
                return 'player';
            } else {
                return 'computer';
            }
        }
    }
    //vertical match
    for (var i in cells) {
        if (
            cells[0][i] !== -1 &&
            cells[1][i] !== -1 &&
            cells[2][i] !== -1 &&
            cells[0][i] === cells[1][i] &&
            cells[0][i] === cells[2][i]
        ) {
            if (cells[0][i] === player) {
                return 'player';
            } else {
                return 'computer';
            }
        }
    }

    //diagonal match
    if (
        (cells[0][0] !== -1 &&
            cells[1][1] !== -1 &&
            cells[2][2] !== -1 &&
            cells[0][0] === cells[1][1] &&
            cells[0][0] === cells[2][2]) ||
        (cells[0][2] !== -1 &&
            cells[1][1] !== -1 &&
            cells[2][0] !== -1 &&
            cells[0][2] === cells[1][1] &&
            cells[0][2] === cells[2][0])
    ) {
        if (cells[1][1] === player) {
            return 'player';
        } else {
            return 'computer';
        }
    }

    return false;
}

function computerMove() {
    const arr = freeCells();
    const arr2 = bestMove();
    const sign = computer === 0 ? 'O' : 'X';
    const x = Math.round(Math.random() * arr.length);

    if (arr2.length >= 1) {
        var i = arr2[0];
        var j = arr2[1];
    } else if (arr.length >= 1) {
        var i = arr[x][0];
        var j = arr[x][1];
    }
    if ((arr.length >= 1 || arr2.length >= 1) && cells[i][j] === -1) {
        const a = parseInt(i) + 1;
        const b = parseInt(j) + 1;
        new Promise((resolve, reject) => {
            $('#c' + a + b).html(sign);
            resolve();
        }).then(() => {
            cells[i++][j++] = computer;
        });
        return 0;
    }
}

function freeCells() {
    const arr = [];
    for (const i in cells) {
        for (const j in cells[i]) {
            if (cells[i][j] === -1) {
                arr.push([i, j]);
            }
        }
    }
    return arr;
}

// eslint-disable-next-line complexity
function bestMove() {
    let computerInLine = 0;
    let playerInLine = 0;
    let a = 0;
    let maybe = null;
    //check rows
    for (let i in cells) {
        for (let j in cells[i]) {
            if (cells[i][j] !== -1) {
                if (cells[i][j] === computer) {
                    computerInLine++;
                } else {
                    playerInLine++;
                }
            } else {
                a = j;
            }
        }
        if (computerInLine === 2 && a !== 0) {
            return [i, a];
        } else if (playerInLine === 2 && a !== 0) {
            maybe = [i, a];
        }
        a = 0;
        computerInLine = 0;
        playerInLine = 0;
    }

    //check columns
    for (let j in cells) {
        for (let i in cells[i]) {
            if (cells[i][j] !== -1) {
                if (cells[i][j] === computer) {
                    computerInLine++;
                } else {
                    playerInLine++;
                }
            } else {
                a = i;
            }
        }
        if (computerInLine === 2 && a !== 0) {
            return [a, j];
        } else if (playerInLine === 2 && a !== 0) {
            maybe = [a, j];
        }
        a = 0;
        computerInLine = 0;
        playerInLine = 0;
    }

    //check diagonals
    let h = 0;
    a = -1;
    let b = -1;
    playerInLine = 0;
    computerInLine = 0;
    for (let k = 0; k < 3; k++) {
        if (cells[k][h] !== -1) {
            if (cells[k][h] === computer) {
                computerInLine++;
            } else {
                playerInLine++;
            }
        } else {
            a = k;
            b = h;
        }

        if (computerInLine === 2 && a !== -1 && b !== -1) {
            return [a, b];
        } else if (playerInLine === 2 && a !== -1 && b != -1) {
            maybe = [a, b];
        }

        h++;
    }

    h = 0;
    a = -1;
    b = -1;
    playerInLine = 0;
    computerInLine = 0;

    for (let k = 2; k >= 0; k--) {
        if (cells[k][h] !== -1) {
            if (cells[k][h] === computer) {
                computerInLine++;
            } else {
                playerInLine++;
            }
        } else {
            a = k;
            b = h;
        }

        if (computerInLine === 2 && a !== -1 && b !== -1) {
            return [a, b];
        } else if (playerInLine === 2 && a !== -1 && b != -1) {
            maybe = [a, b];
        }

        h++;
    }

    if (maybe !== null) return maybe;
    return [];
}

function clearTable() {
    for (let a = 1; a <= 3; a++) {
        for (let b = 1; b <= 3; b++) {
            $('#c' + a + b).html('');
        }
    }
}

function emptyCells() {
    for (let a = 0; a < 3; a++) {
        cells.push([-1, -1, -1]);
    }
}
