let options = ['rock', 'paper', 'scissors' ];

var userContainer = document.querySelector('#container');
var computerContainer = document.querySelector('#computer');
var computerresult = document.querySelector('#computer1');
var userresult = document.querySelector('#user');


var result = document.querySelector('#result');
var again = document.querySelector('#again');

again.onclick =  playAgain;
function playAgain(){
    userContainer.removeAttribute('value'); 
    computerContainer.removeAttribute('value');
    result.innerHTML = '';

}




options.forEach(element => {
    const userContainer = document.querySelector('#container');
    const button = document.createElement("button");
    button.innerHTML = element;
    button.classList.add(element);   
    userContainer.appendChild(button)
    button.setAttribute('style', 'background-color: #4CAF50;border: none;color: white;padding: 15px 32px;text-align: center;text-decoration: none;display: inline-block;font-size: 16px;margin: 4px 2px;cursor: pointer;');    

    button.onclick =  userChoice;
    
});


function userChoice(e) {

        let playerSelection = e.target.innerText;
        const x = userContainer.setAttribute('value',playerSelection);
        let computer = computerChoice(options)
        let user = userContainer.getAttribute('value')
        computerresult.innerHTML = computer
        userresult.innerHTML = user

        result.innerHTML = winner(computer,user)

  }

  
function computerChoice(arr){
    const random = Math.floor(Math.random() * arr.length);
    computerContainer.setAttribute('value',arr[random]);
    return arr[random]
}




function winner(ComputerChoice,playerChoice){
    if (playerChoice === ComputerChoice) {
        return "It's a tie!";
    }
    if (playerChoice === "rock") {
        if (ComputerChoice === "scissors") {
            return "You win!";
        } else {
            return "You lose! Try again.";
        }
    }
    if (playerChoice === "paper") {
        if (ComputerChoice === "rock") {
            return "You win!";
        } else {
            return "You lose! Try again.";
        }
    }
    if (playerChoice === "scissors") {
        if (ComputerChoice === "rock") {
            return "You lose! Try again.";
        } else {
            return "You win!";
        }
    }
}









