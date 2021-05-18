let board = [1, 2, 3, 4, 5, 6, 7, 8, 9]
const board_number_set = new Set(['1', '2', '3', '4', '5', '6', '7', '8', '9'])
let input_number_set = new Set([])
let input_counter = 0

const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
})

function printBoard(board) {
    let printableBoard = []
    for (row = 0; row < board.length;) {
        let one_row = board.slice(row, row += 3).join(" | ") + '\n'
        printableBoard.push(one_row)
    }
    console.log(printableBoard.join('---------\n'))
}

function checkGameResults(board) {
    if (noMoreTurns()) {
        console.log('The game ended with a tie.')
        readline.close();
    } else if (oneWins("X")) {
        console.log('Crosses won! Congratulations!')
        readline.close();
    } else if (oneWins("O")) {
        console.log('Noughts won! Congratulations!')
        readline.close();
    } else {
        makeTurn(board)
    }
}

function noMoreTurns() {
    return input_number_set.size == 9
}

function oneWins(sign) {
    // horizontal
    for (n = 0; n < 7; n += 3) {
        if (board[n] == board[n + 1] && board[n + 2] == board[n] && board[n] == sign) {
            return true
        }
    }
    // vertical
    for (n = 0; n < 3; n++) {
        if (board[n] == board[3 + n] && board[n] == board[6 + n] && board[n] == sign) {
            return true
        }
    }
    // diagonal
    if (board[0] == board[4] && board[0] == board[8] && board[0] == sign) {
        return true
    }
    // diagonal
    if (board[2] == board[4] && board[2] == board[6] && board[2] == sign) {
        return true
    }
}

function makeTurn(board) {
    printBoard(board);
    readline.question('Enter your number:\n', input => {
        if (!board_number_set.has(input) || input_number_set.has(input)) {
            console.log('Invalid input, try again')
            makeTurn(board)
            return
        }
        input_counter += 1
        input_number_set.add(input)
        for (n = 0; n < board.length; n++) {
            if (board[n] == Number(input)) {
                if (input_counter % 2 == 0) {
                    board[n] = "O"
                } else {
                    board[n] = "X"
                }
            }
        }
        checkGameResults(board)
    });
}


console.log('Welcome to Noughts-n-Crosses!')
makeTurn(board)
