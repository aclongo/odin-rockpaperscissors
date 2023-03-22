# odin-rockpaperscissors
This is my solution to the JavaScript Rock Paper Scissors assignment from The Odin Project Foundations course.

In this project, I attempted to utilize as much as I could from everything I've learned about JavaScript so far. There are three functions in addition to the main game() function, each with their own job. One determines the computers choice for the current round (getComputerChoice()), another prompts the user for a choice and validates it (getPlayerChoice()), and another determines the winner for the round (playRound()). 

## Details
The **getComputerChoice()** function utilizes Math.floor and Math.random to pick 'rock', 'paper' or 'scissors' for the computer in the current round of play. 

The **getPlayerChoice()** function utilizes an array, a while loop, .toLowerCase() and the .includes() array method to get a valid choice from the user each round. This is case-insensitive - the player can type 'rock','PAPER', or 'SciSsoRs' in any combination of upper and lower case letters. However, anything other than those words will reset the prompt window so they can try again. 

The **playRound()** function is just a series of if/else if/else statements comparing the player choice to the computer choice. The result, whether 'tie', 'player'(won) or 'computer'(won), is sent back to the main game() function.

The main **game()** function controls the flow of the game. It loops through 5 rounds of calling the other functions to get choices and round results, while keeping track of and logging the current scores. After 5 rounds it determines a final winner.

## Mistakes Learned
Most of the issues I encountered during this project involved variables and scope.

## The Future
I'm excited to add a GUI to this when I get further in The Odin Project. At that time I will retheme it to be Fire, Water, Grass (inspired by Pokemon) as they interact the same way that Rock, Paper, Scissors does. Fire beats Grass, Grass beats Water, Water beats Fire.
