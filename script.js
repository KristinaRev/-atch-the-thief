function startGame() {
    gameLoop();
}

var loops = 0;
var peopleVisible = false;
var gameScore = 0;

function gameLoop() {
    peopleVisible = !peopleVisible;
    createCharacters();
    loops++;
    if (loops < 12) {
        setTimeout(gameLoop, peopleVisible ? 900 : 1500);
    } else {
        alert("Твой счёт" + gameScore);
    }

    function createCharacters() {
        var board = document.getElementById("board");
        var classToSet = peopleVisible ? "character visible" : "character hidden";
        for (let index = 0; index < 8; index++) {
            board.children[index].className = classToSet;
            board.children[index].innerHTML = "";
            board.children[index].onclick = function() {
                gameScore += -2;
            }
        }
        
        let randomNumber = Math.floor(Math.random() * 8) + 1;
        board.children[randomNumber - 1].innerHTML = "";
        board.children[randomNumber - 1].onclick = function() {
            gameScore++;
        }
        board.children[randomNumber - 1].className = classToSet + " thief";
    }
}