// All code should be written in this file.

// The 12 Global Variables
// MOVES
let playerOneMoveOneType;
let playerOneMoveTwoType;
let playerOneMoveThreeType;
let playerTwoMoveOneType;
let playerTwoMoveTwoType;
let playerTwoMoveThreeType;

let playerOneMoveOneValue;
let playerOneMoveTwoValue;
let playerOneMoveThreeValue;
let playerTwoMoveOneValue;
let playerTwoMoveTwoValue;
let playerTwoMoveThreeValue;

// Helper: validate move type
const validTypes = ['rock', 'paper', 'scissors'];

function setPlayerMoves(player, move1Type, move1Value, move2Type, move2Value, move3Type, move3Value) {
    if (
        !player ||
        !move1Type || !move2Type || !move3Type ||
        !move1Value || !move2Value || !move3Value
    ) {
        return;
    }

    // must be valid types
    if (
        !validTypes.includes(move1Type) ||
        !validTypes.includes(move2Type) ||
        !validTypes.includes(move3Type)
    ) {
        return;
    }

    // must be between 1–99
    if (
        move1Value < 1 || move1Value > 99 ||
        move2Value < 1 || move2Value > 99 ||
        move3Value < 1 || move3Value > 99
    ) {
        return;
    }

    // sum must be ≤ 99
    if (move1Value + move2Value + move3Value > 99) {
        return;
    }

    if (player === "Player One") {
        playerOneMoveOneType = move1Type;
        playerOneMoveTwoType = move2Type;
        playerOneMoveThreeType = move3Type;

        playerOneMoveOneValue = move1Value;
        playerOneMoveTwoValue = move2Value;
        playerOneMoveThreeValue = move3Value;
    } else if (player === "Player Two") {
        playerTwoMoveOneType = move1Type;
        playerTwoMoveTwoType = move2Type;
        playerTwoMoveThreeType = move3Type;

        playerTwoMoveOneValue = move1Value;
        playerTwoMoveTwoValue = move2Value;
        playerTwoMoveThreeValue = move3Value;
    }
}

// Determine winner for one round
function getRoundWinner(round) {
    if (round === 1) {
        var p1type = playerOneMoveOneType;
        var p2type = playerTwoMoveOneType;
        var p1value = playerOneMoveOneValue;
        var p2value = playerTwoMoveOneValue;
    } else if (round === 2) {
        var p1type = playerOneMoveTwoType;
        var p2type = playerTwoMoveTwoType;
        var p1value = playerOneMoveTwoValue;
        var p2value = playerTwoMoveTwoValue;
    } else if (round === 3) {
        var p1type = playerOneMoveThreeType;
        var p2type = playerTwoMoveThreeType;
        var p1value = playerOneMoveThreeValue;
        var p2value = playerTwoMoveThreeValue;
    } else {
        return null; // invalid round
    }

    // if anything missing → null
    if (!p1type || !p2type || !p1value || !p2value) {
        return null;
    }

    if (p1type === p2type) {
        if (p1value > p2value) return "Player One";
        if (p2value > p1value) return "Player Two";
        return "Tie";
    }

    if (
        (p1type === "rock" && p2type === "scissors") ||
        (p1type === "paper" && p2type === "rock") ||
        (p1type === "scissors" && p2type === "paper")
    ) {
        return "Player One";
    }

    return "Player Two";
}

function getGameWinner() {
    // If ANY moves missing → null
    if (
        !playerOneMoveOneType || !playerOneMoveTwoType || !playerOneMoveThreeType ||
        !playerTwoMoveOneType || !playerTwoMoveTwoType || !playerTwoMoveThreeType ||
        !playerOneMoveOneValue || !playerOneMoveTwoValue || !playerOneMoveThreeValue ||
        !playerTwoMoveOneValue || !playerTwoMoveTwoValue || !playerTwoMoveThreeValue
    ) {
        return null;
    }

    let p1Wins = 0;
    let p2Wins = 0;

    for (let i = 1; i <= 3; i++) {
        let winner = getRoundWinner(i);
        if (winner === "Player One") p1Wins++;
        if (winner === "Player Two") p2Wins++;
    }

    if (p1Wins > p2Wins) return "Player One";
    if (p2Wins > p1Wins) return "Player Two";
    return "Tie";
}

// BONUS
function setComputerMoves() {
    const typeOptions = ["rock", "paper", "scissors"];

    // choose random types
    playerTwoMoveOneType = typeOptions[Math.floor(Math.random() * 3)];
    playerTwoMoveTwoType = typeOptions[Math.floor(Math.random() * 3)];
    playerTwoMoveThreeType = typeOptions[Math.floor(Math.random() * 3)];

    // generate 3 values that sum to 99
    let v1 = Math.floor(Math.random() * 97) + 1;
    let v2 = Math.floor(Math.random() * (98 - v1)) + 1;
    let v3 = 99 - v1 - v2;

    playerTwoMoveOneValue = v1;
    playerTwoMoveTwoValue = v2;
    playerTwoMoveThreeValue = v3;
}

