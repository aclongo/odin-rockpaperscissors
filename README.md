# odin-rockpaperscissors
My solution to the JavaScript Rock Paper Scissors assignment from The Odin Project Foundations.

In this project, I attempted to utilize everything I've learned about JavaScript thus far. There are three functions in addition to the main game() function, each with their own job. One determines the computers choice for the current round (getComputerChoice()), another prompts the user for a choice and validates it (getPlayerChoice()), and another determines the winner for the round (playRound). The getComputerChoice() function utilizes Math.floor and Math.random to pick 'rock', 'paper' or 'scissors' for the computer in the current round of play. The getPlayerChoice() function utilizes an array, a while loop and the .includes() array method to get a valid choice from the user each round. The playRound() function is just a series of if/else if/else statements comparing the player choice to the computer choice. The result, where 'tie', 'player'(won) or 'computer'(won), is sent back to the main game() function.

The main game() function controls the flow of the game. It calls the other functions to get choices and round results, keeps track of and logs the current scores, and loops through 5 rounds of the game before determining a final winner.

Mistakes Learned:
Most of the issues I encountered during this project involved variable scope.

The Future:
I'm excited to add a GUI to this when I get further in The Odin Project.
