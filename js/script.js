// *************************** YOUR CODE BELOW *******************************
//******************TEST EARLY AND OFTEN USING console.log() ******************
//****************** SERIOUSLY TEST USING console.log()!!! ******************

//GLOBAL VARIABLES
/* global $ */
var userChoice = "";
var computerChoice = "";
var winner = "";
var randomNumber = 0;


// DOCUMENT READY FUNCTION BELOW
$("#shoot").click(function(){
    userChoice = $("#input").val();
   $("#userChoice").text(userChoice);
   randomNumber = Math.floor(Math.random()*3);
   console.log(randomNumber);
   if (randomNumber === 0) {
       computerChoice = "rock";
   } else if (randomNumber === 1) {
       computerChoice = "scissors";
   } else if (randomNumber === 2) {
       computerChoice = "paper";
   }
   console.log(computerChoice);
   $("#computerChoice").text(computerChoice); 
   if (userChoice === "rock") {
        if (computerChoice === "rock") {
            $("#result").text("Tie!");
        } else if (computerChoice === "paper") {
            $("#result").text("Loser! Paper Beats Rock!");
        }  else if (computerChoice === "scissors") {
                $("#result").text("Winner! Rock Beats Scissors");
                $("#userChoice").text(userChoice);
            }
   }
    else if (userChoice === "paper") {
        if (computerChoice === "paper") {
            $("#result").text("Tie!");
        } else if (computerChoice === "scissors") {
            $("#result").text("Loser! Scissors Beats Paper!");
        } else if (computerChoice === "rock") {
            $("#result").text("Winner! Paper Beats Rock!");
            $("#userChoice").text(userChoice);
        }
    }
    
    else if  (userChoice === "scissors") {
        if (computerChoice === "scissors") {
            $("#result").text("Tie!");
        } else if (computerChoice === "paper") {
            $("#result").text("Winner! Scissors Beats Paper!");
        } else if (computerChoice === "rock") {
            $("#result").text("Loser! Rock Beats Scissors!");
            $("#userChoice").text(userChoice);
        }
    } else {
        alert('Invalid Option');
        $("#userChoice").text("");
        $("#computerChoice").text("");
    }
        
});

