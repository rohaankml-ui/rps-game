let userScore = 0;
let computerScore = 0;


const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");
const userscorepara = document.querySelector(".userScore");
const compscorepara = document.querySelector(".computerScore");



const generatecomputerchoice = () =>{
    const options = ["rock", "paper", "scissor"];
    const randomidx = Math.floor(Math.random() *3);
    return options[randomidx];
};

const DrawGame = () =>{
    console.log("Game Was Draw")
    msg.innerText = "Game Was Draw 🙃,Play Again!";
    msg.style.backgroundColor = "yellow"
};
const showWinner = (userWin,userChoice,CompChoice) => {
     if (userWin) {
        userScore++;
        userscorepara.innerText = userScore;

        msg.innerText = `You Win🥳 Your ${CompChoice} Beats ${userChoice}`;
        msg.style.backgroundColor = "#14903F"
    } else {
        computerScore++;
        compscorepara.innerText = computerScore;
        msg.innerText = `You Lose😑 ${userChoice} Beats Your ${CompChoice}`;
        msg.style.backgroundColor = "#DD0004"

    }
};

const playgame = (userChoice) =>{
    console.log("user choice = ",userChoice);
    const CompChoice = generatecomputerchoice();
    console.log("Computer choice = ",CompChoice);

    if (userChoice === CompChoice) {
        DrawGame();
    }else {
        let userWin = true;
        if (userChoice === "rock") {
            userWin = CompChoice === "paper" ? false : true;
        } else if(userChoice === "paper"){
            userWin = CompChoice === "scissor" ? false : true;
        } else {
            userWin = CompChoice === "rock" ? false : true ;
        }
        showWinner(userWin, CompChoice, userChoice);
    }

};


choices .forEach((choice) =>{   
    choice.addEventListener("click", () =>{
        const userChoice = choice.getAttribute("id");
        playgame(userChoice);
    });
});