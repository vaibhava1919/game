let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice");
const message = document.querySelector("#message");

const userScorePara = document.querySelector("#user-score");
const compScorePara = document.querySelector("#comp-score");

const genCompChoice = () => {
    let options = ["rock", "paper", "scicor"];
    const randIdx = Math.floor(Math.random() * 3);
    return options[randIdx];
};

const drawGame = () => {
   message.innerText="Game was Draw. Play again."
   message.style.backgroundcolor="#081b37";
};
const showWinner = (userWin, userChoice, compChoice) => {
    if (userWin) {
      userScore++;
      userScorePara.innerText = userScore;
      message.innerText = `You win! Your ${userChoice} beats ${compChoice}`;
      message.style.backgroundColor = "green";
    } else {
      compScore++;
      compScorePara.innerText = compScore;
      message.innerText = `You lost. ${compChoice} beats your ${userChoice}`;
      message.style.backgroundColor = "red";
    }
  }; 

const playGame = (userChoice) => {
    console.log("user choice =", userChoice);
    const compChoice = genCompChoice();
    console.log("comp choice =", compChoice);

    if(userChoice=== compChoice){
        drawGame();
    } else{
        let userWin=true;
        if(userChoice==="rock"){
            userWin = compChoice==="paper"? false :true;
        } else if(userChoice ==="paper"){
           userWin= compChoice=== "scicor"? false:true;
        } else {
            userWin=compChoice==="rock"? false: true;
        }
        showWinner(userWin, userChoice, compChoice);
    }
}
choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        const userChoice = choice.getAttribute("id");
        playGame(userChoice);
    });
});