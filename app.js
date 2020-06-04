const game = () => {
  let pScore = 0;
  let cScore = 0;


  //game start
  const startgame = ()=>{
    const playbtn = document.querySelector(".intro button");
    const interoScreen = document.querySelector(".intro");
    const match = document.querySelector(".match");

    playbtn.addEventListener("click", () => {
      interoScreen.classList.add("fadeOut");
      match.classList.add("fadeIn");
      //console.log("intro");
    });
  };

  //play
  const playMatch = () => {
    const options = document.querySelectorAll(".options button");
    const playerhand = document.querySelector(".player-hand");
    const computerHand = document.querySelector(".computer-hand");
    const hands = document.querySelectorAll(".hands img");

    hands.forEach((hand) =>{
      hand.addEventListener("animationend", function(){
        this.style.animation = "";
      })
    });

    //options
    const computerOptions = ["rock", "paper", "scissor"];

    options.forEach((option) => {
      option.addEventListener("click", function(){
        //console.log(option);
        //computer choice
        const computerNumber = Math.floor(Math.random() * 3);
        //console.log(computerNumber);
        const computerChoice = computerOptions[computerNumber];
        //console.log(computerChoice);

        setTimeout(() => {
          compareHnads(this.textContent, computerChoice);
          //images
          playerhand.src = `Images/${this.textContent}.png`;
          computerHand.src = `Images/${computerChoice}.png`;
        }, 2000)
        //animation
        playerhand.style.animation = "shakePlayer 2s ease";
        computerHand.style.animation = "shakeComputer 2s ease";
      });
    });
  };

  //score
  const updateScore = () => {
    const playerScore = document.querySelector(".player-score p");
    const computerScore = document.querySelector(".computer-score p");

    playerScore.textContent = pScore;
    computerScore.textContent = cScore; 
  }


  //compare
  const compareHnads = (playerChoice, computerChoice) => {

    const winner = document.querySelector(".winner")

    if(playerChoice === computerChoice){
      winner.textContent = "It is a tie";
      return;
    }

    if(playerChoice === "rock"){
      if(computerChoice === "scissor"){
        winner.textContent = "Player Winns";
        pScore++;
        updateScore();
        return;
      }else{
        winner.textContent = "Computer wins";
        cScore++;
        updateScore();
        return;
      }
    }

    if(playerChoice === "paper"){
      if(computerChoice === "rock"){
        winner.textContent = "Player Winns";
        pScore++;
        updateScore();
        return;
      }else{
        winner.textContent = "Computer wins";
        cScore++;
        updateScore();
        return;
      }
    }
    
    if(playerChoice === "scissor"){
      if(computerChoice === "paper"){
        winner.textContent = "Player Winns";
        pScore++;
        updateScore();
        return;
      }else{
        winner.textContent = "Computer wins";
        cScore++;
        updateScore();
        return;
      }
    }
  };


  //sub functions
  startgame();
  playMatch();

};

//main function
game();
