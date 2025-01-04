
document.addEventListener("DOMContentLoaded", () => {
    const choices = document.querySelectorAll(".choice");
    const userScoreEl = document.getElementById("userScore");
    const compScoreEl = document.getElementById("compScore");
    const msgEl = document.getElementById("msg");
    const userChoiceImg = document.getElementById("userChoiceImg");
    const compChoiceImg = document.getElementById("compChoiceImg");
  
    let userScore = 0;
    let compScore = 0;
  
    const choicesArray = ["rock", "paper", "scissors"];
  
    const images = {
      rock: "./imgs/rock.png",
      paper: "./imgs/paper.png",
      scissors: "./imgs/scissors.png",
      placeholder: "./imgs/placeholder.png",
    };
  
    // Function to get computer's choice
    function getComputerChoice() {
      const randomIndex = Math.floor(Math.random() * choicesArray.length);
      return choicesArray[randomIndex];
    }
  
    // Function to determine the winner
    function determineWinner(userChoice, compChoice) {
      if (userChoice === compChoice) {
        return "draw";
      } else if (
        (userChoice === "rock" && compChoice === "scissors") ||
        (userChoice === "paper" && compChoice === "rock") ||
        (userChoice === "scissors" && compChoice === "paper")
      ) {
        return "user";
      } else {
        return "computer";
      }
    }
  
    // Function to update the scoreboard and visuals
    function updateGame(userChoice, compChoice, winner) {
      userChoiceImg.src = images[userChoice];
      compChoiceImg.src = images[compChoice];
  
      if (winner === "user") {
        userScore++;
        userScoreEl.textContent = userScore;
        msgEl.textContent = "You win! 🎉";
      } else if (winner === "computer") {
        compScore++;
        compScoreEl.textContent = compScore;
        msgEl.textContent = "Computer wins! 💻";
      } else {
        msgEl.textContent = "It's a draw! 🤝";
      }
    }
  
    // Event listeners for player choices
    choices.forEach(choice => {
      choice.addEventListener("click", () => {
        const userChoice = choice.id.toLowerCase();
        const compChoice = getComputerChoice();
  
        const winner = determineWinner(userChoice, compChoice);
        updateGame(userChoice, compChoice, winner);
      });
    });
  });
  