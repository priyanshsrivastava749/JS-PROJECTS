window.onload = showWeaponSelection;
const display = document.querySelector("#game-screen");
let won = 0;
let lost = 0;
let draw = 0;
let choices = ["ROCK", "PAPER", "SCISSOR"];
let userchoice = "";
let computerchoice = "";
let res = "";
function showWeaponSelection() {
  display.innerHTML = ` <h3 id="weapon-selector">Select Your Weapon</h3>
        <div class="game-icons-container">
          <button class="game-icon" id="rock-btn">
            <img src="ASSETS/Icons/USER ROCK.png" alt=""/>
            <h4>ROCK</h4>
          </button>
          <button class="game-icon" id="paper-btn">
            <img src="ASSETS/Icons/USER PAPER.png" alt=""/>
            <h4>PAPER</h4>
          </button>
          <button class="game-icon" id="scissor-btn">
            <img src="ASSETS/Icons/USER SCISSOR.png" alt=""/>
            <h4>SCISSOR</h4>
          </button>
        </div>`;
  let btns = ["rock-btn", "paper-btn", "scissor-btn"];
  for (let i = 0; i < btns.length; i++) {
    let btn = document.querySelector(`#${btns[i]}`);
      btn.addEventListener("click", () => {
      userchoice = btn.innerText;
      let randomNum = Math.floor(Math.random() * 3);
      computerchoice = choices[randomNum];
      if (userchoice === computerchoice) {
        draw++;
        res = "Its a Draw!";
      }
       else if (userchoice === "ROCK" && computerchoice === "SCISSOR") {
        won++;
        res = "You Won!";
      } else if (userchoice === "PAPER" && computerchoice === "ROCK") {
        won++;
        res = "You Won!";
      } else if (userchoice === "SCISSOR" && computerchoice === "PAPER") {
        won++;
        res = "You Won!";
      } else {
        lost++;
        res = "You Lose!";
      }
      fightScreen();
      setTimeout(() => {
        resultScreen();
      }, 3000);
    });
  }
}
// showWeaponSelection();

function fightScreen() {
  let fightSound = new Audio("ASSETS/Sounds/fight.mp3");
  fightSound.play();
  display.innerHTML = `<div class="fightscreen">
        <img src="ASSETS/Icons/USER ROCK.png" alt="" id="user-fight-fist">
        <img src="ASSETS/Icons/COMPUTER ROCK.png" alt="" id="comp-fight-fist">
       </div>`;
}
function resultScreen() {
  if (res === "You Lose!") {
    let defeatsound = new Audio("ASSETS/Sounds/lose.mp3");
    defeatsound.play();
  }
  else if (res === "You Won!") {
    let victorysound = new Audio("ASSETS/Sounds/victory sound.mp3");
    victorysound.play();
  }
  else {
    let drawsound = new Audio("ASSETS/Sounds/draw.mp3");
    drawsound.play();
  }
    display.innerHTML = `<div id="result">
        <div id="result-img">
          <img src="ASSETS/Icons/USER ${userchoice}.png" alt="">
          <img src="ASSETS/Icons/COMPUTER ${computerchoice}.png" alt="">
        </div>
        <p id="result-msg"> ${res}!</p>
        <button id="play-again">play again!</button>
       </div>`;
  document.querySelector(`.match-score`).innerHTML = ` <div>Won:${won}</div>
        <div>Lost:${lost}</div>
        <div>Draw${draw}</div>`;
  document.querySelector("#play-again").addEventListener("click", () => {
    let playagain = new Audio("ASSETS/Sounds/play again sound.mp3");
    playagain.play();
    playagain.volume=1;
    showWeaponSelection();
  });
}
