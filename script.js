var gameArea = document.querySelector('.game-area');
var timer = 0;
var score = 0;
var hitValue = document.querySelector("#hit");
var rn = Math.floor(Math.random() * 10);
hitValue.innerHTML = rn;

function generateBubbles() {
    gameArea.innerHTML = '';
for (var i = 1; i <= 98; i++) {
    var rn = Math.floor(Math.random() * 10);
    gameArea.innerHTML += `<div class="bubble">${rn}</div>`;
}
}
generateBubbles();

function checkHit() {
    gameArea.addEventListener('click', (e) => {
        console.log(e.target.innerHTML);
        if (e.target.innerHTML == hitValue.innerHTML) {
            getScore();
            var rn = Math.floor(Math.random() * 10);
            hitValue.innerHTML = rn;
            generateBubbles();
        }
    });
}
checkHit();

function setTimer() {
    var timerInterval = setInterval(function () {
        if (timer > 0) {
            timer--;
            document.getElementById('timer').innerText = timer;
        } else {
            clearInterval(timerInterval);
            gameArea.innerHTML = `<div class="game-over"><h1>Game Over</h1><p>Your Score: ${score}</p><button class="restart">Restart Game</button></div>`;
            hitValue.innerHTML = `-`;
            var restartButton = document.querySelector('.restart');
            restartButton.addEventListener('click', function() {
                // Reset game state
                timer = 60;
                score = 0;
                document.getElementById('score').innerText = score;
                document.getElementById('timer').innerText = timer;
                var rn = Math.floor(Math.random() * 10);
                hitValue.innerHTML = rn;
                generateBubbles();
                setTimer();
            });

        }
    }, 1000)
};

function getScore() {
    score += 10;
    document.getElementById('score').innerText = score;
}

setTimer();