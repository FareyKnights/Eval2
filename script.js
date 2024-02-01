let score1 = 0;
let score2 = 0;
let actualScore1 = 0;
let actualScore2 = 0;
let playerTurn = 0;
let randomResult = 0;
let p1Name = "";
let p2Name = "";
let gameStatus = "notReady";



function initializeGame() {

    score1 = 0;
    score2 = 0;
    actualScore1 = 0;
    actualScore2 = 0;
    randomResult = 0;
    playerTurn = Math.floor(Math.random() * 2) + 1;
    console.log(playerTurn);
    p1Name = prompt("Nom du joueur 1 :");
    document.getElementById("P1Name").innerHTML = p1Name;
    p2Name = prompt("Nom du joueur 2 :");
    document.getElementById("P2Name").innerHTML = p2Name;
    document.getElementById("P1Score").innerHTML = score1;
    document.getElementById("P2Score").innerHTML = score2;
    document.getElementById("P1Current").innerHTML = actualScore1;
    document.getElementById("P2Current").innerHTML = actualScore2;
    gameStatus = "InGame";
    if (playerTurn === 1 && gameStatus == "InGame") {
        document.getElementById("Winner").innerHTML = "Au tour de " + p1Name;
    }
    else if (playerTurn === 2 && gameStatus == "InGame") {
        document.getElementById("Winner").innerHTML = "Au tour de " + p2Name;
    }
    
    
}

function LaunchDice() {
 
    if (gameStatus === "InGame") {
    randomResult = Math.floor(Math.random() * 6) + 1;
    return randomResult; 
    }
}

function Hold() {
    if (gameStatus === "InGame") {
        if (playerTurn === 1) {
            score1 = score1 + actualScore1;
            document.getElementById("P1Score").innerHTML = score1;
            actualScore1 = 0;
            document.getElementById("P1Current").innerHTML = actualScore1;
            playerTurn = 2;
            
        }
        else {
            score2 = score2 + actualScore2;
            document.getElementById("P2Score").innerHTML = score2;
            actualScore2 = 0;
            document.getElementById("P2Current").innerHTML = actualScore2;
            playerTurn = 1;
            
        }

    }
}



const newGame = document.getElementById("NewGame");
newGame.addEventListener('click', () => {
initializeGame();

const roll = document.getElementById("RollDice");
roll.addEventListener('click',() => {
    LaunchDice()
    if (playerTurn === 1) {
    actualScore1 = actualScore1 + randomResult;
    
        if (randomResult === 1 ) {
            playerTurn = 2;
            actualScore1 = 0;
            document.getElementById("Winner").innerHTML = "Au tour de " + p2Name;
        }
    document.getElementById("P1Current").innerHTML = actualScore1;
    randomResult = 0;
    }
    else  {
        actualScore2 = actualScore2 + randomResult;
        
        
        if (randomResult === 1) {
            playerTurn = 1;
            actualScore2 = 0;
            document.getElementById("Winner").innerHTML = "Au tour de " + p1Name;
        }
        document.getElementById("P2Current").innerHTML = actualScore2;
        randomResult = 0;

        }
})
      
const hold = document.getElementById("Hold");
hold.addEventListener('click', () => {
    Hold();
    if (score1 >= 100) {
        document.getElementById("Winner").innerHTML = p1Name + " a gagné !" 
        gameStatus = "Over"
    }
    else if (score2 >= 100) {
        document.getElementById("Winner").innerHTML = p2Name + " a gagné !" 
        gameStatus = "Over"
    }
    if (playerTurn === 1 && gameStatus == "InGame") {
        document.getElementById("Winner").innerHTML = "Au tour de " + p1Name;
    }
    else if (playerTurn === 2 && gameStatus == "InGame") {
        document.getElementById("Winner").innerHTML = "Au tour de " + p2Name;
    }
})





})