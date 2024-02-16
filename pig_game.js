//player 1
//player 2
// dice 3
// currentScore 4
// TotalScore 5
// HOLD 6
// ResetScore
// Roll
let player1 = true;
let player2 = false;
let diceValue = 0;
let currentScore1 = 0;
let currentScore2 = 0;
let totalScore1 = 0;
let totalScore2 = 0;
let holdButton = false;
let ResetScore = false;
let Roll = false;
let html = "";
const onDiceRoll = () => {

    let difference = 7 - 1;
    diceValue = Math.floor(Math.random() * difference);
    diceValue += 1;
    return diceValue;
}

const onHold = (score) => {
    if(player1)
        totalScore1 += score;
    else
        totalScore2 += score;
}

const currentScoreShow = (score) => {
    if(player1)
        currentScore1 += score;
    else
        currentScore2 += score;
}

document.addEventListener("DOMContentLoaded", () => {
    onDiceRoll();
});



