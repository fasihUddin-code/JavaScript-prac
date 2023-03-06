console.log('Exercise_2-Snake,Water And Gun Game');

let runAgain = true;
let computerScore = 0 ;
let userScore= 0 ;

while (runAgain) {
    
      // Create an array with the letters S, W, G
    const letter = ['S','W','G'];
    
      // Generate a random integer between 0 and 2
    const randomIndex = Math.floor(Math.random()*3);
    
      // Choose a letter from the array using the random index
    const randomLetter = letter[randomIndex];
    
    // Print the random letter to the console
    console.log(`Random letter is ${randomLetter}`);

    const userLetter = prompt('Enter S for Snake,G for Gun or W for Water').toUpperCase();
    console.log(`user letter is ${userLetter}`);

    if((randomLetter=='S' && userLetter == 'W')||(randomLetter=='W' && userLetter == 'G')||(randomLetter=='G' && userLetter == 'S')){
        alert('Computer Won')
        computerScore++;
    }
    else if((randomLetter=='W' && userLetter == 'S')||(randomLetter=='G' && userLetter == 'W')||(randomLetter=='S' && userLetter == 'G')){
        alert('user won')
        userScore++;
    }
    else{
        alert('Match draw')
    }
    runAgain = confirm('Do you want to play again!')
}

alert(`Computer score:${computerScore}`)
alert(`user score:${userScore}`)